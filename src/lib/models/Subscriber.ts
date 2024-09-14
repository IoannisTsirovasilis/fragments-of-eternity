import mongoose, { Schema, Document } from "mongoose";

export interface ISubscriber extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Subscriber =
  (mongoose.models.Subscriber as mongoose.Model<
    ISubscriber,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, ISubscriber> &
      ISubscriber & {
        _id: mongoose.Types.ObjectId;
      },
    any
  >) || mongoose.model<ISubscriber>("Subscriber", subscriberSchema);
