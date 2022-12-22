import { Schema, model, models } from 'mongoose'

type VerificationType = {
  email: string
  otp: string | number
}

const VerificationSchema = new Schema<VerificationType>({
  email: String,
  otp: String || Number,
})

const OtpVerification =
  models.verification || model('verification', VerificationSchema)

export { OtpVerification }
