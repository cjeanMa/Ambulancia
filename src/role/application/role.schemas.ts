import Joi from "joi"

export const roleSchemas = {
    GET_ONE: Joi.object({
            id: Joi.number().integer().required()
        }),
    UPDATE: Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string(),
    }),
    DELETE: Joi.object({
        id: Joi.number().integer().required()
    }),
    GET_PAGE: Joi.object({
        page: Joi.number().integer().required(),
    }),
    INSERT: Joi.object({
        name: Joi.string().required(),
    })
}
