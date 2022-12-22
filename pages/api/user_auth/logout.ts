import { Users } from '../../../models/users.model'
import dbConnect from '../../../utils/db'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

declare var process: {
  env: {
    JWT_SECRET: string
    NODE_ENV: string
  }
}
type Verification = {
  userName: string
  userId: string
  email: string
}

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { auth_cookie }: any = req.cookies
  try {
    await dbConnect()
    if (req.method === 'POST') {
      if (!auth_cookie) {
        return res.json({
          status: 0,
          message: 'already logged out!',
        })
      }
      const verification = jwt.verify(
        auth_cookie,
        process.env.JWT_SECRET,
      ) as Verification
      await Users.updateOne(
        { _id: verification.userId },
        { $push: { blackList: auth_cookie } },
      )
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth_cookie', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: -1,
          path: '/',
        }),
      )
      res.status(200).json({
        status: 1,
        message: 'logged out!',
      })
    }
  } catch (error) {
    const { message }: any = error
    res.json(message)
    console.log(error)
  }
}

export default logout
