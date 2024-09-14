import { ResponseCode } from "@/lib/constants";

export class SubscriberAlreadyExistsError extends Error {
  status: number;
  code: ResponseCode;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.status = 422;
    this.code = ResponseCode.UnprocessableEntity;
  }
}
