import { format } from "path/posix";
import { Result } from "../../shared/application/result.repository";
import { ResponseDTO } from "../../shared/helpers/response.dto";
import { generateTrace } from "../../shared/helpers/trace";
import { MedicModel } from "../domain/medic.model";
import { MedicOperation } from "../infraestructure/medic.operation";
import { mappingMedicDTO, MedicResponseDTO } from "./medic.dto";

export class MedicUseCase{

    constructor(private operation:MedicOperation){}

    async list(): Promise<Result<MedicResponseDTO>>{
        const traceId = generateTrace();
        const result : MedicModel[] = await this.operation.list();
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result), 2, "list Medics");
    }

    async getOne(id:number) : Promise<Result<MedicResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getOne(id);
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result), 2, "getOne medic");
    }

    async insert(medic:Partial<MedicModel>): Promise<Result<MedicResponseDTO>>{
        const traceId= generateTrace();
        const result = await this.operation.create(medic);
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result), 2, "insert medic");
    }
    
    async update(id:number, medic:Partial<MedicModel>): Promise<Result<MedicResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.update(id, medic);
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result), 2, "update medic");
    }

    async getPage(page:number) : Promise<Result<MedicResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.getPage(1);
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result.data), 1, "UserCase, GetPage", result.total)
    }

    async delete(id:number) : Promise<Result<MedicResponseDTO>>{
        const traceId = generateTrace();
        const result = await this.operation.delete(id);
        return ResponseDTO.format<MedicResponseDTO>(traceId, mappingMedicDTO(result), 1, "UserCase, Delete")
    }

}