import Joi from "joi";

const params = Joi.object({
    rent_item_id: Joi.string().required()
})

const body = Joi.object({
    name: Joi.string().required(),
    rent_price: Joi.number().required(),
    manufacture_date: Joi.number().required()
});

export default {
    params,
    body
}