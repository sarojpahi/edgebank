import { NextApiResponse } from 'next'
import {
  ExtendedNextAPIRequest,
  verifyuser,
} from '../../../middlewares/verifyUser'
import { Users } from '../../../models/users.model'
import dbConnect from '../../../utils/db'

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method } = req
  if (method === 'GET') {
    await dbConnect()
    try {
      const user = await Users.findOne(
        { _id: req.userId },
        { password: 0, blackList: 0, __v: 0 },
      ).populate(['beneficiary'])
      return res.status(200).json({
        status: 1,
        user,
      })
    } catch (e) {
      return res.status(500).json({
        status: 0,
        message: e,
      })
    }
  }
}

export default verifyuser(handler)
