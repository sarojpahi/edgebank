import { Schema, models, model } from "mongoose";

export type TransactionType = {
  credit: number;
  debit: number;
  sender: String;
  receiver: String;
};

export type AccountDetailsType = {
  user: String;
  transactionId: String;
  transaction: TransactionType;
};

const accountsSchema = new Schema<AccountDetailsType>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  transactionId: String,
  transaction: {
    credit: Number,
    debit: Number,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
});

const AccountTransactions =
  models.transection || model("transaction", accountsSchema);

export { AccountTransactions };
