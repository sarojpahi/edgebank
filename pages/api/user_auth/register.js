import { Users } from "../../../models/users.model";
import dbConnect from "../../../utils/db";
import argon from "argon2";

export default async function handler(req, res) {
  const { userName, email, password, aadhar } = req.body;
  try {
    await dbConnect();
    if (req.method === "POST") {
      let existing = await Users.findOne({ email, userName });
      if (!existing) {
        const hash = await argon.hash(password);
        await Users.create({
          email,
          userName,
          password: hash,
          aadhar: +aadhar,
        });
        return res.status(201).json({
          status: 0,
          message: "User has been created!",
        });
      } else {
        return res.status(401).json({
          status: 0,
          message: "something went wrong!",
        });
      }
    } else if (req.method === "PATCH") {
      const {
        userName,
        email,
        mobile,
        password,
        city,
        pin,
        state,
        houseDetails,
        aadhar,
        id,
      } = req.body;
      let user = await Users.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            userName,
            password,
            mobile,
            email,
            "address.city": city,
            "address.pin": pin,
            "address.state": state,
            "address.houseDetails": houseDetails,
            aadhar,
          },
        }
      );
      return res.send(user);
    } else {
      return res.status(500).json({
        status: 0,
        message: "wrong request method!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: error.message,
    });
    console.log(error);
  }
}
