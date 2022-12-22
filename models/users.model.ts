import { Schema, model, models } from 'mongoose'

const createAccNum = () => Math.floor(1 + Math.random() * 100000000000000)

type AddressType = {
  city: string
  pin: number
  state: string
  houseDetails: string
}

export type UserType = {
  userName: string
  mobile: number
  email: string
  password: string
  address: AddressType
  aadhar: number
  accountNumber: number
  image: string
  blackList: Array<String>
  beneficiary: Array<String>
}

const userSchema = new Schema<UserType>({
  userName: { type: String, unique: true, required: true },
  mobile: Number,
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  address: {
    city: String,
    pin: Number,
    state: String,
    houseDetails: String,
  },
  aadhar: { type: Number, required: true },
  accountNumber: {
    type: Number,
    default: createAccNum(),
  },
  image: String,
  blackList: [String],
  beneficiary: [String],
})

const Users = models.user || model('user', userSchema)

export { Users }
