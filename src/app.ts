import express,  {Application, Request, Response, NextFunction} from 'express';
import {router as routeUsers} from "./user/adapter/user.route"
import {router as routeMedics} from "./medic/adapter/medic.routes"
import {router as routeDrivers} from "./driver/adapter/driver.routes"
import {router as routeRoles} from "./role/adapter/role.routes"
import { router as routeAuth } from "./auth/adapter/auth.routes"
import { ErrorHandler, IError } from './shared/helpers/error.handler';
import multer from 'multer'

const app:Application = express();

/* Middlewares */
//multer();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

/* Routes */

app.get("/status", (req : Request, res: Response) => {
    res.send("OK")
})

app.use("/users", routeUsers)
app.use("/medics", routeMedics)
app.use("/drivers", routeDrivers)
app.use("/roles", routeRoles)
app.use("/auth", routeAuth)

/* To handle errors*/
app.use("*", ErrorHandler.notFound)  

/* app.use((error:IError, req:Request, res:Response, next:NextFunction)=>{
    return res.json({msg: "aqui llegaste"})
}) */

app.use(ErrorHandler.generic)

export default app;