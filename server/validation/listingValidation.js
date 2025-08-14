import Joi from "joi";

export const listingSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().positive().required(),
  location: Joi.string().required(),
  image: Joi.string().uri().optional()
});

export function validateListing(data) {
  return listingSchema.validate(data);
}
