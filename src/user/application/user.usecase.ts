import { Result } from "../../shared/application/result.repository";
import { ResponseDTO } from "../../shared/helpers/response.dto";
import { generateTrace } from "../../shared/helpers/trace";
import { UserModel } from "../domain/user.model";
import { UserResponseDTO ,mappingUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export class UserUseCase {

    constructor(private operation: UserRepository){

    }

    async list() : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result : UserModel[]= await this.operation.list();

       return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, List")
    }

    async getOne(id:number): Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result : UserModel = await this.operation.getOne(1);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, GetOne")
    }

    async insert(user: Partial<UserModel>) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        //const partialUser = Object.assign({id:123}, user)
        user.password = await UserService.cryptPassword(user.password);
        const result : UserModel = await this.operation.create(user);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, Insert")
    }

    async getPage(page:number) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getPage(1);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result.data), 1, "UserCase, GetPage", result.total)
    }

    async update(id:number, user:Partial<UserModel>) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.update(id, user);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, Update")
    }
    async delete(id:number) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.delete(id);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, Delete")
    }
}