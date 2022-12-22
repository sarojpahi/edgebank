import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../utils/db'
import jwt from 'jsonwebtoken'

declare var process: {
  env: {
    JWT_SECRET: string
  }
}

type jwtpayload = {
  userId: string
}

export type ExtendedNextAPIRequest = NextApiRequest & {
  userId: string
}

export const verifyuser = (handler: Function) => {
  return async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
    const { auth_cookie } = req.cookies
    try {
      await dbConnect()
      const verification = jwt.verify(
        auth_cookie!,
        process.env.JWT_SECRET,
      ) as jwtpayload
      if (verification) {
        req.userId = verification.userId
        return handler(req, res)
      } else {
        return res.status(400).json({
          status: 0,
          message: 'cookieToken is expired!',
        })
      }
    } catch (error) {
      return res.status(500).json({})
    }
  }
}
