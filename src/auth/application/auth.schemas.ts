import Joi from "joi";

export const authSchemas = {
    LOGIN: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

}