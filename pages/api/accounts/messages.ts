import { NextApiResponse } from "next";
import {
  verifyuser,
  ExtendedNextAPIRequest,
} from "../../../middlewares/verifyUser";
import { Messages } from "../../../models/message.model";
import dbConnect from "../../../utils/db";

type RequestBodyType = {
  text: string;
  to: string;
  from: string;
};

const handler = async (req: ExtendedNextAPIRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { text, from, to }: RequestBodyType = body;

  if (method === "POST") {
    try {
      await dbConnect();
      await Messages.create({
        text,
        users: [from, to],
        sender: from,
      });
      return res.status(201).json({ status: 1, message: "Message Sent" });
    } catch (error) {
      return res.status(500).json({
        status: 0,
        message: "somthing went wrong!",
      });
    }
  }

  if (method === "GET") {
    try {
      await dbConnect();
      const message = await Messages.find({
        users: {
          $all: [from, to],
        },
      }).sort({ updatedAt: 1 });
      const projectedmessages = message.map((msg) => {
        return {
          fromself: msg.sender.toString() === from,
          message: msg.text,
        };
      });
      return res.status(201).json({ status: 1, projectedmessages });
    } catch (error) {
      return res.status(500).json({
        status: 0,
        message: "somthing went wrong!",
      });
    }
  }
};

export default verifyuser(handler);
