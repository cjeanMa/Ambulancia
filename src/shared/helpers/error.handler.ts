import { NextFunction, Request, Response } from "express";
import { ResponseDTO } from "./response.dto";
import { generateTrace } from "./trace";

export interface IError extends Error {
    status?:number;
    traceId?:string;
}

export class ErrorHandler{
    static notFound(req: Request, res:Response, next:NextFunction){
        const traceId = generateTrace();
        const err:IError = new Error("Path not found")
        err.status = 404
        err.traceId = traceId
        next(err)
    }

    static asyncError(ftn: (req:Request, res:Response, next: NextFunction)=>Promise<any>){
        return (req:Request, res:Response, next:NextFunction)=>{
            ftn(req, res, next).catch((error)=>{
                const traceId = generateTrace();
                const err:IError = new Error("Error on async")
                err.status = error.status
                err.stack = error.stack
                err.message = error.message
                err.traceId = traceId
                next(err)
            })
        }
    }

    static generic(error:IError, req: Request, res:Response, next:NextFunction){
        const objError = {
            name: error.name,
            status: error.status,
            message: error.message,
            stack: error.stack
        }
        const responseJson = ResponseDTO.format(error.traceId, objError, 2, "Error");
        res.status(error.status).json(responseJson)
    }
}