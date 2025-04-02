import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

// # common schema validation

const emailSchema = Joi.string().email().required().messages({
  "string.empty": "Email is required.!",
  "string.email": "Invalid email format.!",
});

const payerSchema = Joi.object({
  fname: Joi.string().min(3).required().messages({
    "string.empty": "First name is required.!",
    "string.min": "First name must be at least 3 characters long.!",
  }),
  lname: Joi.string().required().messages({
    "string.empty": "Last name is required.!",
  }),
  email: emailSchema,
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "Mobile number is required.!",
      "string.pattern.base": "Mobile number must be exactly 10 digits.!",
    }),
  amount: Joi.number()
    .greater(0)
    .required()
    .custom((value, helpers) => {
      const numValue = Number(value);
      if (isNaN(numValue)) {
        return helpers.error("number.base"); // Trigger number error if not a valid number
      }
      return numValue; // Convert to a number before returning
    })
    .messages({
      "number.base": "Amount must be a valid number.!",
      "number.greater": "Amount must be greater than 0.!",
      "any.required": "Amount is required.!",
    }),
  // amount: Joi.string(),
  comments: Joi.string(),
});

export const validateDonation = validator(payerSchema);
