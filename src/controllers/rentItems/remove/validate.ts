import Joi from "joi";

const params = Joi.object({
    rent_item_id: Joi.string().required()
})

export default {
    params
}