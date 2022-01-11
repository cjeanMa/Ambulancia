import Joi from "joi"

export const userSchemas = {
    GET_ONE:{
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    }
}
