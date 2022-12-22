import { NextApiResponse } from 'next'
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from '../../../middlewares/verifyUser'
import { v4 as uuidv4 } from 'uuid'
import { AccountTransections } from '../../../models/userTransections.model'
import {
  AccountDetails,
  AccountDetailsType,
} from '../../../models/userAccount.model'

type RequestBodyType = {
  receiverId: string
  amount: number
}

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { receiverId, amount }: RequestBodyType = body

  if (method === 'POST') {
    try {
      const accountSBalance = (await AccountDetails.findOne({
        user: req.userId,
      })) as AccountDetailsType
      const accountRBalance = (await AccountDetails.findOne({
        user: receiverId,
      })) as AccountDetailsType
      const transectionId: string = uuidv4()
      if (amount > accountSBalance.balance) {
        return res.status(500).json({
          status: 0,
          message: 'not enough balance!',
        })
      } else {
        //.....
        await AccountTransections.create({
          user: req.userId,
          transectionId,
          'transection.sender': req.userId,
          'transection.receiver': receiverId,
          'transection.debit': amount,
        })
        //.....
        await AccountTransections.create({
          user: receiverId,
          transectionId,
          'transection.sender': req.userId,
          'transection.receiver': receiverId,
          'transection.credit': amount,
        })
        //...
        AccountDetails.updateOne(
          { user: req.userId },
          { $set: { balance: accountSBalance.balance - amount } },
        )
        AccountDetails.updateOne(
          { user: receiverId },
          { $set: { balance: accountRBalance.balance + amount } },
        )
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
