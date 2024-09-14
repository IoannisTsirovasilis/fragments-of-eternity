import { createTransport } from "nodemailer";

export async function sendEmail({
  subject,
  fromEmail,
  toEmail,
  html,
}: {
  subject: string;
  fromEmail: string;
  toEmail: string;
  html: string;
}) {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: String(process.env.GMAIL_EMAIL),
      pass: String(process.env.GMAIL_PASSWORD),
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject,
    html,
  });
}
