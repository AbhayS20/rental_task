import Joi from "joi";

const params = Joi.object({
    user_id: Joi.string().required()
})

const body = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export default {
    params,
    body
}