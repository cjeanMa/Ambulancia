import Joi from "joi";

export const medicSchema = {
    GET_ONE: Joi.object({
        id: Joi.number().integer().required()
    }),
    UPDATE: Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string(),
        email: Joi.string(),
        identifier: Joi.string(),
        authorization: Joi.string()
    }),
    DELETE: Joi.object({
        id: Joi.number().integer().required()
    }),
    GET_PAGE: Joi.object({
        page: Joi.number().integer().required(),
    }),
    INSERT: Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().required(),
        email: Joi.string().required(),
        identifier: Joi.string().required(),
        authorization: Joi.string()
    })
}