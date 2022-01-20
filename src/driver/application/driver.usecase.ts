import { Result } from "../../shared/application/result.repository";
import { ResponseDTO } from "../../shared/helpers/response.dto";
import { generateTrace } from "../../shared/helpers/trace";
import { DriverModel } from "../domain/driver.model";
import { DriverOperation } from "../infraestructure/driver.operation";
import { DriverResponseDTO, mappingDriverDto } from "./driver.dto";
import { DriverRepository } from "./driver.repository";

export class DriverUseCase{
    
    constructor(private operation : DriverRepository){
    }

    async list(): Promise<Result<DriverResponseDTO>>{
        const traceId = generateTrace();
        const result : DriverModel[] = await this.operation.list({}, [], {});
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result), 2, "list drivers");
    }

    async getOne(id:number) : Promise<Result<DriverResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getOne(id);
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result), 2, "getOne driver");
    }

    async insert(driver:Partial<DriverModel>): Promise<Result<DriverResponseDTO>>{
        const traceId= generateTrace();
        const result = await this.operation.create(driver);
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result), 2, "insert driver");
    }
    
    async update(id:number, driver:Partial<DriverModel>): Promise<Result<DriverResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.update(id, driver);
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result), 2, "update driver");
    }

    async getPage(page:number) : Promise<Result<DriverResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getPage(1);
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result.data), 1, "UserCase, GetPage drivers", result.total)
    }

    async delete(id:number) : Promise<Result<DriverResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.delete(id);
        return ResponseDTO.format<DriverResponseDTO>(traceId, mappingDriverDto(result), 1, "UserCase, Delete driver")
    }



}