import { NextApiResponse } from 'next'
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from '../../../middlewares/verifyUser'
import dbConnect from '../../../utils/db'
import { AccountDetails } from '../../../models/userAccount.model'

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method } = req
  if (method === 'GET') {
    try {
      console.log(req.userId)
      await dbConnect()
      const existingAccount = await AccountDetails.findOne({
        user: req.userId,
      })
      if (existingAccount) {
        res.status(200).json({
          status: 1,
          userAccount: existingAccount,
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
