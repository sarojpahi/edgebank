import { NextApiResponse } from 'next'
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from '../../../middlewares/verifyUser'
import { v4 as uuidv4 } from 'uuid'
import { AccountTransactions } from '../../../models/userTransactions.model'
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

      let transactionId: string = uuidv4()
      transactionId = transactionId.slice(0, 18).replaceAll('-', '')
      if (amount > accountSBalance.balance) {
        return res.status(500).json({
          status: 0,
          message: 'not enough balance!',
        })
      } else {
        //.....
        await AccountTransactions.create({
          user: req.userId,
          transactionId,
          'transaction.sender': req.userId,
          'transaction.receiver': receiverId,
          'transaction.debit': amount,
          balance: accountSBalance.balance - amount,
        })
        //.....
        await AccountTransactions.create({
          user: receiverId,
          transactionId,
          'transaction.sender': req.userId,
          'transaction.receiver': receiverId,
          'transaction.credit': amount,
          balance: accountRBalance.balance + amount,
        })
        //...
        await AccountDetails.updateOne(
          { user: req.userId },
          { $set: { balance: accountSBalance.balance - amount } },
        )
        await AccountDetails.updateOne(
          { user: receiverId },
          { $set: { balance: accountRBalance.balance + amount } },
        )
        return res.status(200).json({
          status: 1,
          transactionId,
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
