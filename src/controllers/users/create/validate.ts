import Joi from "joi";

const body = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export default {
    body
}