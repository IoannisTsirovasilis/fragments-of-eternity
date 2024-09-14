import Joi from "joi";
import { NextRequest } from "next/server";
import { BadRequestError } from "../errors/BadRequestError";

export function validateSchema(schema: Joi.Schema, value: any) {
  const result = schema.validate(value, {
    abortEarly: false,
    stripUnknown: true,
  });

  return result;
}

export async function validateRequest(req: NextRequest, schema: Joi.Schema) {
  const request = await req.json();

  const { error, value } = validateSchema(schema, request);

  if (error) {
    const message = error.details.map((detail) => detail.message).join(", ");
    throw new BadRequestError(message);
  }

  return value;
}
