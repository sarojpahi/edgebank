import { NextApiResponse } from 'next'
import {
  ExtendedNextAPIRequest,
  verifyuser,
} from '../../../middlewares/verifyUser'
import { Users } from '../../../models/users.model'
import dbConnect from '../../../utils/db'

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, userName, mobile } = body
  if (method === 'POST') {
    await dbConnect()
    try {
      const userToBeAdded = await Users.findOne({ email, userName, mobile })
      const loginedUser = await Users.findOne({ _id: req.userId })
      if (loginedUser) {
        if (!loginedUser.beneficiary.includes(userToBeAdded.userId)) {
          await Users.updateOne(
            { _id: req.userId },
            { $push: { beneficiary: userToBeAdded.userId } },
          )
          return res.status(200).json({
            status: 1,
            message: 'beneficiary has been added to your account!',
          })
        } else {
          return res.status(500).json({
            status: 1,
            message: 'This is user is already added to your account!',
          })
        }
      } else {
        return res.status(401).json({
          status: 0,
          message: 'something went wrong!',
        })
      }
    } catch (e) {
      return res.status(500).json({
        status: 0,
        message: e,
      })
    }
  }
}

export default verifyuser(handler)
