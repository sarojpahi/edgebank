import { NextApiResponse } from 'next'
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from '../../../middlewares/verifyUser'
import dbConnect from '../../../utils/db'
import { AccountTransections } from '../../../models/userTransections.model'

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method } = req
  if (method === 'POST') {
    try {
      await dbConnect()
      const existingAccount = await AccountTransections.findOne({
        user: req.userId,
      })
      if (existingAccount) {
        res.status(200).json({
          status: 1,
          accountDetails: existingAccount,
        })
      } else {
        return res.status(401).json({
          status: 0,
          message: 'something went wrong!',
        })
      }
    } catch (error) {
      return res.status(500).json({
        status: 0,
        message: 'somthing went wrong!',
      })
    }
  }
}

export default verifyuser(handler)
