import Joi from "joi";

export const subscribeFormSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .max(256)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "The Email must be a string",
      "string.empty": "The Email cannot be empty",
      "string.max": "The Email cannot exceed 256 characters",
      "string.email": "Invalid Email format",
      "any.required": "The Email is required",
    }),
});
