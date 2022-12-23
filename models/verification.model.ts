import { Schema, model, models } from 'mongoose'

type VerificationType = {
  email: string
  otp: string
  userName: string
  mobile: number
  password: string
  aadhar: number
}

const VerificationSchema = new Schema<VerificationType>({
  email: String,
  otp: String,
  userName: String,
  mobile: Number,
  password: String,
  aadhar: Number,
})

const OtpVerification =
  models.verification || model('verification', VerificationSchema)

export { OtpVerification }
