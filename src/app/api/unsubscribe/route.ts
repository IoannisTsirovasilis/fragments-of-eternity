import { HEADERS, ResponseCode } from "@/lib/constants";
import { HTTPResponse } from "@/lib/httpResponse";
import { validateRequest } from "@/lib/validation/validate";
import { NextRequest, NextResponse } from "next/server";
import { unsubscribeSubscriber } from "@/lib/services/subscriberService";
import { unsubscribeSchema } from "@/lib/unsubscribeSchema";

export async function POST(req: NextRequest) {
  try {
    const fields = await validateRequest(req, unsubscribeSchema);

    await unsubscribeSubscriber(fields.id, fields.email);

    const httpResponse: HTTPResponse = {
      code: ResponseCode.Ok,
      status: 200,
      data: { message: "Unsubscribed successfully" },
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
