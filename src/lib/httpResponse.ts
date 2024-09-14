import { ResponseCode } from "@/lib/constants";

export interface HTTPResponse {
  code: ResponseCode;
  status: number;
  data?: any;
  message?: string;
}
