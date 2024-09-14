import dbConnect from "../db";
import { SubscriberAlreadyExistsError } from "../errors/SubscriberAlreadyExistsError";
import { Subscriber } from "../models/Subscriber";

export async function addSubscriber(email: string) {
  await dbConnect();

  const existingSubscriber = await Subscriber.findOne({ email }).exec();

  if (existingSubscriber) {
    throw new SubscriberAlreadyExistsError("Subscriber already exists");
  }

  const subscriber = new Subscriber({ email });

  return subscriber.save();
}
