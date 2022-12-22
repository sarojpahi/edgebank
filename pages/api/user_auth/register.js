import { Users } from "../../../models/users.model";
import dbConnect from "../../../utils/db";
import argon from 'argon2'
import { mailOptions, transporter } from "../../../utils/mailConfig";
import { OtpVerification } from "../../../models/verification.model";


export default async function handler(req, res) {
    const { userName, email, password, aadhar, verificationRequest, verification, verificationOtp } = req.body;
    try {
        await dbConnect();
        if (req.method === "POST") {
            let existing = await Users.findOne({ email, userName })
            if (!existing) {
                if (verificationRequest) {
                    const random = Math.floor(1 + Math.random() * 1000000)
                    await transporter.sendMail({
                        ...mailOptions,
                        to: 'shrikantjawla@gmail.com',
                        subject: 'Email Verification',
                        text: 'Please verify your email by entering this verification code in your browser!',
                        html: `<p>OTP for email verification: ${random}</p>`
                    })
                    await OtpVerification.create({ email, otp: random });
                    return res.status(200).json({
                        status: 1,
                        message: 'otp has been sent!'
                    })
                } else if (verification) {
                    const existing = await OtpVerification.findOne({ email });
                    if (existing) {
                        if (existing.otp == verificationOtp) {
                            await OtpVerification.deleteOne({ email })
                            const hash = await argon.hash(password);
                            await Users.create({ email, userName, password: hash, aadhar: +aadhar })
                            return res.status(201).json({
                                status: 0,
                                message: 'User has been created!'
                            })
                        } else {
                            return res.status(500).json({
                                status: 0,
                                message: 'wrong otp!'
                            })
                        }
                    }
                } else {
                    return res.status(401).json({
                        status: 0,
                        message: 'something went wrong!'
                    })
                }

            } else if (req.method === "PATCH") {

            }
        }
        else {
            return res.status(500).json({
                status: 0,
                message: 'wrong request method!'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 0,
            message: error.message
        })
        console.log(error);
    }
}


