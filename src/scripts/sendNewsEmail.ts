import "dotenv/config";
import mongoose from "mongoose";
import dbConnect from "../lib/db";
import { Subscriber } from "../lib/models/Subscriber";
import { sendEmail } from "../lib/services/mailService";

export async function sendNewsEmail() {
  try {
    await dbConnect();

    const subscribers = await Subscriber.find().exec();

    const results = await Promise.allSettled(
      subscribers.map((subscriber) => {
        return sendEmail({
          subject: `New Map: The Land of Marona`,
          fromEmail: String(process.env.GMAIL_EMAIL),
          toEmail: subscriber.email,
          html: buildEmailHtml(subscriber.email, String(subscriber.id)),
        }).catch((error) => {
          return Promise.reject(
            new Error(
              `Failed to send email to ${subscriber.email}: ${error.message}`,
            ),
          );
        });
      }),
    );

    // show errors
    results.forEach((result) => {
      if (result.status === "rejected") {
        console.error(result.reason);
      }
    });

    const sentSuccessfully = results.filter(
      (result) => result.status === "fulfilled",
    ).length;

    console.log(
      `Sent ${sentSuccessfully}/${subscribers.length} emails successfully`,
    );
  } catch (error) {
    console.error("Error running:", error);
  } finally {
    mongoose.connection.close();
  }
}

function buildEmailHtml(email: string, id: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Map Available | Fragments of Eternity</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1a1a1a; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #2c2c2c; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
    
    <!-- Header -->
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #444;">
      <h1 style="color: #ffcc00; font-family: 'MedievalSharp', serif; font-size: 28px;">New Map Available!</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 20px; color: #dddddd;">
      <p>Dear Adventurer,</p>
      
      <p>We’re excited to announce that a new asset has been added to the world of <strong>Fragments of Eternity</strong>!</p>

      <p>The map of the <strong>Land of Marona</strong> is now available for you to explore. Visit <a href="${process.env.HOST}/assets" style="color: #ffcc00;">Assets</a> to uncover the details and mysteries of this land.</p>
      
      <p>We hope this map aids you on your journey as you prepare for the adventures ahead.</p>

      <p><em>May your path be clear,</em><br>
      <strong>The Fragments of Eternity Team</strong></p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #aaaaaa; font-size: 14px;">
      <p>&copy; 2024 Fragments of Eternity. All rights reserved.</p>
      
      <!-- Unsubscribe Section -->
      <p style="margin-top: 20px;">Don't want to receive updates anymore? You can <a href="${process.env.HOST}/unsubscribe/?email=${email}&token=${id}" style="color: #ffcc00;">unsubscribe here</a>.</p>
    </div>
    
  </div>
</body>
</html>
`;
}

sendNewsEmail();

// npx tsc .\src\scripts\sendNewsEmail.ts
// node .\src\scripts\sendNewsEmail.js
