import { RoleEntity } from "../../entities/role.entity";
import { GeneralRepository } from "../../shared/application/general.repository";


export interface RoleRepository extends GeneralRepository<RoleEntity>{
    
}