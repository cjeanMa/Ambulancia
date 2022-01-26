import { RoleRepository } from "../../role/application/role.repository";
import { Result } from "../../shared/application/result.repository";
import { ResponseDTO } from "../../shared/helpers/response.dto";
import { generateTrace } from "../../shared/helpers/trace";
import { UserModel } from "../domain/user.model";
import { UserResponseDTO ,mappingUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export class UserUseCase {

    constructor(private operation: UserRepository, private roleOperation : RoleRepository){

    }

    async list() : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result : UserModel[]= await this.operation.list({},["roles"],{});

       return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, List")
    }

    async getOne(id:number): Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result : UserModel = await this.operation.getOne(id);
        console.log(result)
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, GetOne")
    }

    async insert(user: Partial<UserModel>) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        user.password = await UserService.cryptPassword(user.password);
        user.refreshToken = await UserService.generateRefreshToken()
        let inputRoles : any[] = user.roles;
        let listRoles : any[] = [];
        inputRoles.forEach(el=> {
            listRoles.push(this.roleOperation.getOne(el))
        })
        let roles = await Promise.all(listRoles)
        user.roles = roles;
        const result : UserModel = await this.operation.create(user);
        return ResponseDTO.format<UserResponseDTO>(traceId, mappingUserDTO(result), 1, "UserCase, Insert")
    }

    async getPage(page:number) : Promise<Result<UserResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getPage(page);
        if(!result)
            return null
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