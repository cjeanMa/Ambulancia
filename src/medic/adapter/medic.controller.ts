import { Request, Response } from "express";
import { MedicEntity } from "../../entities/medic.entity";
import { Result } from "../../shared/application/result.repository";
import { MedicResponseDTO } from "../application/medic.dto";
import { MedicRepository } from "../application/medic.repository";
import { MedicUseCase } from "../application/medic.usecase";
import { MedicModel} from "../domain/medic.model";
import { MedicOperation } from "../infraestructure/medic.operation";

const medicOperation:MedicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
//const medicUseCase = new MedicUseCase(MedicEntity);

export class MedicController{

    async list(req: Request, res:Response){
        const result : Result<MedicResponseDTO> = await medicUseCase.list();
        res.json(result);
    }

    async getOne(req:Request, res:Response){
        const id : number = parseInt(req.params.id);
        const result : Result<MedicResponseDTO> = await medicUseCase.getOne(id);
        res.json(result);
    }

    async getPage(req:Request, res:Response){
        const page : number = parseInt(req.params.page);
        const pagination :  Result<MedicResponseDTO> = await medicUseCase.getPage(page);
        res.json(pagination);
    }

    async create(req: Request, res:Response){
        let medic:Partial<MedicModel> = req.body
        const result :  Result<MedicResponseDTO> = await medicUseCase.insert(medic);
        res.json(result);
    }
    async update(req: Request, res:Response){
        const medic:Partial<MedicModel> = req.body;
        const id : number = parseInt(req.params.id);
        const result :  Result<MedicResponseDTO> = await medicUseCase.update(id, medic)
        res.json(result)
    }

    async delete(req:Request, res:Response){
        const id : number = parseInt(req.params.id);
        const result: Result<MedicResponseDTO> = await medicUseCase.delete(id);
        res.json(result)
    }


}