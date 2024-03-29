import cookie from 'cookie'
import { Users } from '../../../models/users.model'
import dbConnect from '../../../utils/db'
import jwt from 'jsonwebtoken'
import argon from 'argon2'
import { NextApiRequest, NextApiResponse } from 'next'

declare var process: {
  env: {
    JWT_SECRET: string
    NODE_ENV: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, password } = req.body
  try {
    await dbConnect()
    if (req.method === 'POST') {
      const existing = await Users.findOne({ email })
      if (await argon.verify(existing.password, password)) {
        if (await argon.verify(existing.password, password)) {
          const verification = jwt.sign(
            {
              userName: existing.userName,
              userId: existing._id,
              email: existing.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30 mins' },
          )
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('auth_cookie', verification, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: 'strict',
              maxAge: 60 * 60 * 24 * 30,
              path: '/',
            }),
          )
          return res.status(200).json({
            status: 1,
            message: 'login successful!',
          })
        } else {
          return res.status(401).json({
            status: 0,
            message: 'wrong password!',
          })
        }
      } else {
        return res.status(401).json({
          status: 0,
          message: 'something went wrong!',
        })
      }
    } else {
      return res.json({
        status: 0,
        message: 'wrong method!',
      })
    }
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}
