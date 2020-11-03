import Joi from "joi";

const body = Joi.object({
    name: Joi.string().required(),
    rent_price: Joi.number().required(),
    manufacture_date: Joi.number().required()
});

export default {
    body
}