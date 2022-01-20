import { RoleEntity } from "../../entities/role.entity";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { RoleRepository } from "../application/role.repository";

export class RoleOperation extends OperationRepository<RoleEntity> implements RoleRepository{
    constructor(){
        super(RoleEntity)
    }
}