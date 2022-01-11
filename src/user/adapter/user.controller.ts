import { Request, Response } from "express";
import { Result } from "../../shared/application/result.repository";
import { UserResponseDTO } from "../application/user.dto";
import { UserRepository } from "../application/user.repository";
import { UserUseCase } from "../application/user.usecase";
import { UserModel } from "../domain/user.model";
import { UserOperation } from "../infraestruture/user.operation";

const userOperation:UserRepository = new UserOperation();
const userUseCase = new UserUseCase(userOperation);

export class UserController{

    async list(req: Request, res:Response){
        /* const result : Result<UserResponseDTO> = await userUseCase.list();
        res.json(result); */
        return Promise.reject({status: 409, message: "User Forbidden", stack: "anything"})
    }

    async getOne(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const user : Result<UserResponseDTO> = await userUseCase.getOne(id)
        res.json(user);
    }

    async getPage(req:Request, res:Response){
        const page : Result<UserResponseDTO> = await userUseCase.getPage(1);
        res.json(page);
    }

    async create(req: Request, res:Response){

        const {name, email, password, photo, roles} = req.body
        console.log({name, email, password, photo, roles})

        let user:Partial<UserModel> = {
            name: "luz marina",
            email: "luz@g.com",
            password: "caballa",
            photo: "paht/path.jopg",
            roles: ['ADMIN']
        }

        const dataUser : Result<UserResponseDTO> = await userUseCase.insert(user);
        res.json(dataUser);
    }
    async update(req: Request, res:Response){
        let dataUser:Partial<UserModel> = {
            name: "luz marina",
            email: "luz@g.com",
            password: "caballa",
            photo: "paht/path.jopg",
            roles: ['ADMIN']
        }
        const user : Result<UserResponseDTO> = await userUseCase.update(1,dataUser)
        res.json(user)
    }

    async delete(req:Request, res:Response){
        const user:Result<UserResponseDTO> = await userUseCase.delete(2);
        res.json(user)
    }
}