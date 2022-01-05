import { Request, Response } from "express";
import { Result } from "../../shared/application/result.repository";
import { DriverResponseDTO } from "../application/driver.dto";
import { DriverUseCase } from "../application/driver.usecase";
import { DriverModel } from "../domain/driver.model";
import { DriverOperation } from "../infraestructure/driver.operation";

const operationDriver = new DriverOperation(); 
const driverUseCase = new DriverUseCase(operationDriver);


export class DriverController{

    async list(req: Request, res:Response){
        const result : Result<DriverResponseDTO> = await driverUseCase.list();
        res.json(result);
    }

    async getOne(req:Request, res:Response){
        const result : Result<DriverResponseDTO> = await driverUseCase.getOne(1);
        res.json(result);
    }

    async getPage(req:Request, res:Response){
        const page :  Result<DriverResponseDTO> = await driverUseCase.getPage(1);
        res.json(page);
    }

    async create(req: Request, res:Response){

        let medic:Partial<DriverModel> = {
            name: "luz marina",
            lastname: "chacon"
        }

        const dataUser :  Result<DriverResponseDTO> = await driverUseCase.insert(medic);
        res.json(dataUser);
    }
    async update(req: Request, res:Response){
        let medic:Partial<DriverModel> = {
            name: "luz marina",
            lastname: "cotrado" 
        }
        const user :  Result<DriverResponseDTO> = await driverUseCase.update(1,medic)
        res.json(user)
    }

    async delete(req:Request, res:Response){
        const user: Result<DriverResponseDTO> = await driverUseCase.delete(2);
        res.json(user)
    }

}