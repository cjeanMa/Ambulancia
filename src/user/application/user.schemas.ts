import Joi from "joi"

export const userSchemas = {
    GET_ONE: Joi.object({
            id: Joi.number().integer().required()
        }),
    UPDATE: Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        photo: Joi.string(),
        roles: Joi.array().items(Joi.number()),
        authorization: Joi.string()
    }),
    DELETE: Joi.object({
        id: Joi.number().integer().required()
    }),
    GET_PAGE: Joi.object({
        page: Joi.number().integer().required(),
    }),
    INSERT: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        photo: Joi.string(),
        roles: Joi.array().items(Joi.string()).required()
    })
}
