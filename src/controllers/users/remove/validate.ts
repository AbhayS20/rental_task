import Joi from "joi";

const params = Joi.object({
    user_id: Joi.string().required()
})

export default {
    params
}