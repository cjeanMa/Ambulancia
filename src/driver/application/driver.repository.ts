import { DriverEntity } from "../../entities/driver.entity";
import { GeneralRepository } from "../../shared/application/general.repository";
import { DriverModel } from "../domain/driver.model";

export interface DriverRepository extends GeneralRepository<DriverEntity>{
    
}