import { NextApiResponse } from 'next'
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from '../../../middlewares/verifyUser'
import dbConnect from '../../../utils/db'
import { AccountTransactions } from '../../../models/userTransactions.model'

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method } = req
  if (method === 'GET') {
    try {
      await dbConnect()
      const existingAccount = await AccountTransactions.find({
        user: req.userId,
      }).populate([
        { path: 'transaction.receiver', select: ['userName'] },
        { path: 'transaction.sender', select: ['userName'] },
      ])
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
