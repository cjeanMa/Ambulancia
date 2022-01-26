import { NextFunction, Request, Response } from "express";
import { UserService } from "../../user/application/user.service";
import { IError } from "../helpers/error.handler";

export class AutheticationGuard{
    static canActivate(request: Request, response:Response, next:NextFunction){
        const headers = request.headers
        const authorization = headers["authorization"]
        if(authorization){
            const passAuthentication = authorization.split(" ");
            if(passAuthentication.length > 1){
                const token = passAuthentication[1];

                UserService.validateJWT(token)
                .then(
                    (payload)=>{
                        response.locals.roles = payload.roles
                        next()
                    }, 
                    error=>{
                        if(error.status === 401){
                            const error:IError = new Error("User not authorized")
                            error.status = 401
                            next(error);
                        }
                        else if(error.status === 409){
                            const error :IError = new Error("Expired Token")
                            error.status = 409
                            next(error)
                        }
                    })

            }
        }
        else{
            const error : IError = new Error("Authorization token is necesary")
            error.status = 403
            next(error)
        }
    }
}