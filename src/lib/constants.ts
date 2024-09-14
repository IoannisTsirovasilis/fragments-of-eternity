export enum ResponseCode {
  BadRequest = "BadRequest",
  Ok = "Ok",
  InternalServerError = "InternalServerError",
  UnprocessableEntity = "UnprocessableEntity",
}

export const HEADERS = Object.freeze({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});
