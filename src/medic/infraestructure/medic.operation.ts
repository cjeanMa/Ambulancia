import { MedicEntity } from "../../entities/medic.entity";
import { MedicRepository } from "../application/medic.repository";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
export class MedicOperation extends OperationRepository<MedicEntity> implements MedicRepository {

    constructor(){
        super(MedicEntity)
    }
}