import { Request, Response } from "express";
import { Result } from "../../shared/application/result.repository";
import { UserResponseDTO } from "../application/user.dto";
import { UserRepository } from "../application/user.repository";
import { UserUseCase } from "../application/user.usecase";
import { UserModel } from "../domain/user.model";
import { UserOperation } from "../infraestructure/user.operation";

const userOperation:UserRepository = new UserOperation();
const userUseCase = new UserUseCase(userOperation);

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
        const page : number = parseInt(req.params.id);
        const result : Result<UserResponseDTO> = await userUseCase.getPage(page);
        res.json(result);
    }

    async create(req: Request, res:Response){
        let user:Partial<UserModel> = req.body
        const result : Result<UserResponseDTO> = await userUseCase.insert(user);
        res.json(result);
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