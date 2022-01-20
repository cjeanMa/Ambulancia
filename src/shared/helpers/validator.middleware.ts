import { Response, Request, NextFunction } from "express";
import { IError } from "./error.handler";


export const validatorJoi = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const resValidation = schema.validate(res.locals.paramsMerged)
        let errorValidations : string[] = []
        if (resValidation.hasOwnProperty('error')) {
            resValidation.error.details.forEach((item: any) => {
                errorValidations.push(item.message)
            })
        }
        if (errorValidations.length > 0) {
            const error: IError = new Error("Error validation")
            error.message = "Error in parameters";
            error.status = 411
            error.stack = errorValidations.join("")
            error.name = "Error validation"
            return next(error)
        }
        next()

    }
}

