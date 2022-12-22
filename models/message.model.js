import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      text: {
        type: String,
        required: true,
      },
      users: Array,
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Messages = model("message", messageSchema);

export { Messages };
