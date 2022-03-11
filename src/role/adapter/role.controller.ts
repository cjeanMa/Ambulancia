import { Request, Response } from "express";
import { Result } from "../../shared/application/result.repository";
import { RoleRepository } from "../application/role.repository";
import { RoleUseCase } from "../application/role.usecase";
import { RoleModel } from "../domain/role.model";
import { RoleOperation } from "../infraestructure/role.operation";

const roleOperation:RoleRepository = new RoleOperation();
const roleUseCase = new RoleUseCase(roleOperation);

export class RoleController{

    async list(req: Request, res:Response){
        const result : Result<RoleModel> =  await roleUseCase.list();
        res.json(result)
    }

    async getOne(req:Request, res:Response){
        const id : number = parseInt(req.params.id)
        const Role : Result<RoleModel> = await roleUseCase.getOne(id)
        res.json(Role);
    }

    async getPage(req:Request, res:Response){
        const page : Result<RoleModel> = await roleUseCase.getPage(1);
        res.json(page);
    }

    async create(req: Request, res:Response){
        const role = req.body
        const dataRole : Result<RoleModel> = await roleUseCase.insert(role);
        res.json(dataRole);
    }

    async update(req: Request, res:Response){
        const dataRole:Partial<RoleModel> = req.body;
        const id : number = parseInt(req.params.id)
        const Role : Result<RoleModel> = await roleUseCase.update(id,dataRole)
        res.json(Role)
    }

    async delete(req:Request, res:Response){
        const Role:Result<RoleModel> = await roleUseCase.delete(2);
        res.json(Role)
    }
}