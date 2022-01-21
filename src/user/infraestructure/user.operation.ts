import { getRepository, Repository } from "typeorm";
import { UserEntity } from "../../entities/user.entity";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { UserRepository } from "../application/user.repository";
import { UserModel } from "../domain/user.model";

export class UserOperation extends OperationRepository<UserEntity> implements UserRepository {

    constructor(){
        super(UserEntity)
    }

    async getOne(id: number): Promise<UserEntity>{
        const repository : Repository<UserEntity> = getRepository(UserEntity)
        const data : UserEntity = await repository.findOne({where:{id}, relations:["roles"]})
        return data
    }

}