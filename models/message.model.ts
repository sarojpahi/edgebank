import { Schema, model } from "mongoose";

export type MessageType = {
  text: string;
  users: string;
  sender: String;
};

const messageSchema = new Schema<MessageType>(
  {
    text: {
      type: String,
      required: true,
    },
    users: Array,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Messages = model("message", messageSchema);

export { Messages };
