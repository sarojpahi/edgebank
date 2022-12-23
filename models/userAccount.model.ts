import { Schema, models, model } from 'mongoose'

export type AccountDetailsType = {
  user: String
  balance: number
}

const accountsSchema = new Schema<AccountDetailsType>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
})

const AccountDetails =
  models.accountDetail || model('accountDetail', accountsSchema)

export { AccountDetails }
