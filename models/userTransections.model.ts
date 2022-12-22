import { Schema, models, model } from 'mongoose'

export type TransectionType = {
  credit: number
  debit: number
  sender: String
  receiver: String
}

export type AccountDetailsType = {
  user: String
  transectionId: String
  transection: TransectionType
}

const accountsSchema = new Schema<AccountDetailsType>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  transectionId: String,
  transection: {
    credit: Number,
    debit: Number,
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
})

const AccountTransections =
  models.transection || model('transection', accountsSchema)

export { AccountTransections }
