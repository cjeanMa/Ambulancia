import { NextFunction, Response, Request } from "express"

export const mergeParameter= () =>{
    return(req:Request, res: Response, next: NextFunction) =>{
        let paramsMerged = {};
        if(req.hasOwnProperty("params")){
            paramsMerged = {...paramsMerged, ...req.params}
        }
        if(req.hasOwnProperty("body")){
            paramsMerged = {...paramsMerged, ...req.body}
        }
        if(req.hasOwnProperty("query")){
            paramsMerged = {...paramsMerged, ...req.query}
        }
        if(req.hasOwnProperty("headers") && req.headers.authorization){
            paramsMerged = {authorization: req.headers.authorization, ...paramsMerged}
        }

        res.locals.paramsMerged = {...paramsMerged};
        next()
    }
}