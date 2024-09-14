import { ResponseCode } from "@/lib/constants";

export class BadRequestError extends Error {
  status: number;
  code: ResponseCode;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.status = 400;
    this.code = ResponseCode.BadRequest;
  }
}
