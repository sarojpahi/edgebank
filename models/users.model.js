import { Schema, model, models } from 'mongoose'


const createAccNum = () => (Math.floor(1 + Math.random() * 100000000000000))


const userSchema = new Schema({
    userName: { type: String, unique: true, required: true },
    mobile: Number,
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    address: {
        city: String,
        pin: Number,
        state: String,
        houseDetails: String
    },
    aadhar: { type: Number, required: true },
    accountNumber: {
        type: Number,
        default: createAccNum()
    },
    blackList: [String]
})

const Users = models.user || model('user', userSchema)

export { Users }

