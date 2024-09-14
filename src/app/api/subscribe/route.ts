import { HEADERS, ResponseCode } from "@/lib/constants";
import { subscribeFormSchema } from "@/lib/subscribeSchema";
import { HTTPResponse } from "@/lib/httpResponse";
import { sendEmail } from "@/lib/services/mailService";
import { validateRequest } from "@/lib/validation/validate";
import { NextRequest, NextResponse } from "next/server";
import { addSubscriber } from "@/lib/services/subscriberService";

export async function POST(req: NextRequest) {
  try {
    const fields = await validateRequest(req, subscribeFormSchema);

    await addSubscriber(fields.email);

    await sendEmail({
      subject: `FOE New Subscriber: ${fields.email}`,
      fromEmail: String(process.env.GMAIL_EMAIL),
      toEmail: String(process.env.GMAIL_EMAIL),
      html: "",
    });

    const httpResponse: HTTPResponse = {
      code: ResponseCode.Ok,
      status: 200,
      data: { message: "Email sent successfully" },
    };

    return NextResponse.json(httpResponse, {
      headers: HEADERS,
    });
  } catch (error: any) {
    return handlerError(error);
  }
}

function handlerError(error: any) {
  const status = error.status ?? 500;
  const code = error.code ?? ResponseCode.InternalServerError;
  const message =
    code === ResponseCode.InternalServerError
      ? "An error occurred. Please try again later."
      : error.message;
  const httpResponse: HTTPResponse = {
    code,
    status,
    message,
  };
  return NextResponse.json(httpResponse, {
    status,
    headers: HEADERS,
  });
}
