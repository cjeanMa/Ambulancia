import { Request, Response } from "express";
import { UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";
import { RoleRepository } from "../../role/application/role.repository";
import { RoleOperation } from "../../role/infraestructure/role.operation";
import { Result } from "../../shared/application/result.repository";
import { UserResponseDTO } from "../application/user.dto";
import { UserRepository } from "../application/user.repository";
import { UserUseCase } from "../application/user.usecase";
import { UserModel } from "../domain/user.model";
import { UserOperation } from "../infraestructure/user.operation";

const userOperation:UserRepository = new UserOperation();
const roleOperation:RoleRepository = new RoleOperation();
const userUseCase = new UserUseCase(userOperation, roleOperation);

export class UserController{

    async list(req: Request, res:Response){
        const users : Result<UserResponseDTO> = await userUseCase.list()
        res.json(users)
    }

    async getOne(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const user : Result<UserResponseDTO> = await userUseCase.getOne(id)
        res.json(user);
    }

    async getPage(req:Request, res:Response){
        const page : number = parseInt(req.params.page);
        const result : Result<UserResponseDTO> = await userUseCase.getPage(page);
        if(!result)
            return res.status(401).json({msg: "Page not found"});
        res.json(result)
    }

    async create(req: Request, res:Response){
        let {name, email, password, photo, roles} = req.body;
        roles = roles.map((el:string)=>parseInt(el))

        let user:Partial<UserModel> = {
            name,
            email,
            password,
            photo,
            roles
        }  
        const result : Result<UserResponseDTO> = await userUseCase.insert(user);
        res.json(result)
    }
    async update(req: Request, res:Response){
        const id : number = parseInt(req.params.id)
        let user:Partial<UserModel> = req.body;
        const result : Result<UserResponseDTO> = await userUseCase.update(id,user)
        res.json(result)
    }

    async delete(req:Request, res:Response){
        const id : number = parseInt(req.params.id)
        const user:Result<UserResponseDTO> = await userUseCase.delete(id);
        res.json(user)
    }
}