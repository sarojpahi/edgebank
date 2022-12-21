import { Schema, model, models } from 'mongoose'


const createAccNum = () => { return Math.floor(1 + Math.random() * 100000000000000) }


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
    aadhar: Number,
    accountNumber: {
        type: Number,
        default: createAccNum()
    },
})

const Users = models.user || model('user', userSchema)

export { Users }

