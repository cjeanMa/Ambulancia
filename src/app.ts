import express,  {Application, Request, Response, NextFunction} from 'express';
import {router as routeUsers} from "./user/adapter/user.route"
import {router as routeMedics} from "./medic/adapter/medic.routes"
import {router as routeDrivers} from "./driver/adapter/driver.routes"
import { ErrorHandler, IError } from './shared/helpers/error.handler';

const app:Application = express();

/* Routes */
app.use("/users", routeUsers);
app.use("/medics", routeMedics);
app.use("/drivers", routeDrivers)

/* To handle errors*/
app.use("*", ErrorHandler.notFound)  

app.use((error:IError, req:Request, res:Response, next:NextFunction)=>{
    return res.json(error)
})

app.use(ErrorHandler.generic)

export default app;