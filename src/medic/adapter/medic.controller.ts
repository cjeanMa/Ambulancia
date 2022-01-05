import { Request, Response } from "express";
import { Result } from "../../shared/application/result.repository";
import { MedicResponseDTO } from "../application/medic.dto";
import { MedicInterface } from "../application/medic.repository";
import { MedicUseCase } from "../application/medic.usecase";
import { MedicModel} from "../domain/medic.model";
import { MedicOperation } from "../infraestructure/medic.operation";

const medicOperation:MedicInterface = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);

export class MedicController{

    async list(req: Request, res:Response){
        const result : Result<MedicResponseDTO> = await medicUseCase.list();
        res.json(result);
    }

    async getOne(req:Request, res:Response){
        const result : Result<MedicResponseDTO> = await medicUseCase.getOne(1);
        res.json(result);
    }

    async getPage(req:Request, res:Response){
        const page :  Result<MedicResponseDTO> = await medicUseCase.getPage(1);
        res.json(page);
    }

    async create(req: Request, res:Response){

        let medic:Partial<MedicModel> = {
            name: "luz marina",
            lastname: "chacon"
        }

        const dataUser :  Result<MedicResponseDTO> = await medicUseCase.insert(medic);
        res.json(dataUser);
    }
    async update(req: Request, res:Response){
        let medic:Partial<MedicModel> = {
            name: "luz marina",
            lastname: "cotrado" 
        }
        const user :  Result<MedicResponseDTO> = await medicUseCase.update(1,medic)
        res.json(user)
    }

    async delete(req:Request, res:Response){
        const user: Result<MedicResponseDTO> = await medicUseCase.delete(2);
        res.json(user)
    }


}