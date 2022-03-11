
import { Result } from "../../shared/application/result.repository";
import { ResponseDTO } from "../../shared/helpers/response.dto";
import { generateTrace } from "../../shared/helpers/trace";
import { RoleModel } from "../domain/role.model";
import { RoleOperation } from "../infraestructure/role.operation";
import { RoleRepository } from "./role.repository";

export class RoleUseCase{

    constructor(private operation:RoleRepository=new RoleOperation()){}

    async list(): Promise<Result<RoleModel>>{
        const traceId = generateTrace();
        const result : RoleModel[] = await this.operation.list({},[],{});
        return ResponseDTO.format<RoleModel>(traceId, result, 2, "list Roles");
    }

    async getOne(id:number) : Promise<Result<RoleModel>>{
        const traceId = generateTrace();
        const result : RoleModel = await this.operation.getOne(id);
        return ResponseDTO.format<RoleModel>(traceId, result, 2, "getOne Role");
    }

    async insert(Role:Partial<RoleModel>): Promise<Result<RoleModel>>{
        const traceId= generateTrace();
        const result = await this.operation.create(Role);
        return ResponseDTO.format<RoleModel>(traceId, result, 2, "insert Role");
    }
    
    async update(id:number, Role:Partial<RoleModel>): Promise<Result<RoleModel>>{
        const traceId = generateTrace();
        const result = await this.operation.update(id, Role);
        return ResponseDTO.format<RoleModel>(traceId, result, 2, "update Role");
    }

    async getPage(page:number) : Promise<Result<RoleModel>>{
        const traceId = generateTrace();
        const result = await this.operation.getPage(page);
        return ResponseDTO.format<RoleModel>(traceId, result.data, 1, "UserCase, GetPage", result.total)
    }

    async delete(id:number) : Promise<Result<RoleModel>>{
        const traceId = generateTrace();
        const result = await this.operation.delete(id);
        return ResponseDTO.format<RoleModel>(traceId, result, 1, "UserCase, Delete")
    }

}