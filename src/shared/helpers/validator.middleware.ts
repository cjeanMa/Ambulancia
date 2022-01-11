import { Response, Request, NextFunction } from "express";
import { IError } from "./error.handler";


export const validatorJoi = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        //Validation in case object schema is empty
        const valuesValidated = ["params", "body", "query", "headers"];
        var validations: any[] = []
        valuesValidated.forEach(el => {
            if (schema.hasOwnProperty(el)) {
                switch (el) {
                    case "params":
                        validations.push(schema[el].validate(req.params))
                        break;
                    case "query":
                        validations.push(schema[el].validate(req.params))
                        break;
                    case "body":
                        validations.push(schema[el].validate(req.params))
                        break;
                    case "headers":
                        validations.push(schema[el].validate(req.params))
                        break;
                }
            }
        })

        let errorValidations: string[] = [];
        Promise.all(validations).then((result: any[]) => {
            result.forEach((res: any) => {
                console.log(res)
                if (res.hasOwnProperty('error')) {
                    res.error.details.forEach((item: any) => {
                        errorValidations.push(item.message)
                        console.log(errorValidations)
                    })
                }
            })
            if (errorValidations.length > 0) {
                const error: IError = new Error("Error validation")
                error.message = "Error in parameters";
                error.status = 411
                error.stack = errorValidations.join("")
                error.name = "Error validation"
                return next(error)
            }
            next()
        })
    }
}

