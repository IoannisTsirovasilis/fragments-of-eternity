import dbConnect from "../db";
import { buildWelcomeEmailHtml } from "../emails/welcomeEmail";
import { SubscriberAlreadyExistsError } from "../errors/SubscriberAlreadyExistsError";
import { ISubscriber, Subscriber } from "../models/Subscriber";
import { sendEmail } from "./mailService";

export async function addSubscriber(email: string) {
  await dbConnect();

  const existingSubscriber = await Subscriber.findOne({ email }).exec();

  if (existingSubscriber) {
    throw new SubscriberAlreadyExistsError("Subscriber already exists");
  }

  const subscriber = new Subscriber({ email });

  await subscriber.save();

  sendWelcomeEmail(subscriber).catch((error) => {
    console.error(error);
  });

  return subscriber;
}

export async function verifyReCaptcha(token: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    },
  );

  const data = await response.json();

  return data.success;
}

export async function unsubscribeSubscriber(id: string, email: string) {
  await dbConnect();

  await Subscriber.findOneAndDelete({
    _id: id,
    email,
  }).exec();
}

async function sendWelcomeEmail(subscriber: ISubscriber) {
  await sendEmail({
    subject: "Welcome to the World of Nulmaris!",
    fromEmail: String(process.env.GMAIL_EMAIL),
    toEmail: subscriber.email,
    html: buildWelcomeEmailHtml(subscriber.email, String(subscriber.id)),
  });
}
