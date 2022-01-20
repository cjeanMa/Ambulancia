import { MedicEntity } from "../../entities/medic.entity";
import { GeneralRepository } from "../../shared/application/general.repository";

export interface MedicRepository extends GeneralRepository<MedicEntity>{

}