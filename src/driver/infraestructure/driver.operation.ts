import { DriverEntity } from "../../entities/driver.entity";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { DriverRepository } from "../application/driver.repository";
import { DriverModel } from "../domain/driver.model";


export class DriverOperation extends OperationRepository<DriverEntity> implements DriverRepository{

    constructor(){
        super(DriverEntity)
    }

}