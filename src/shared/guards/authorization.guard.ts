import { NextFunction, Request, Response } from "express";
import { IError } from "../helpers/error.handler";

export class AuthorizationGuard{
    static rolAuthorization(...inputRoles : string[]){
        return (req:Request, res:Response, next:NextFunction)=>{
            const result : boolean = this.compareArraysRoles(inputRoles, res.locals.roles)
            if(!result){
                const error : IError = new Error("Rol Unauthorized")
                error.status = 403
                next(error)
            }
            next()
        }
    }

    static compareArraysRoles(rolesAllowed : string[], roles: string[]) : boolean{
        let confirmation : boolean = false;
        for(let el of roles){
            if(rolesAllowed.includes(el)){
                confirmation = true
                break;
            }
        }
        return confirmation;
    }
}