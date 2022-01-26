import { getRepository, Repository } from "typeorm";
import { UserEntity } from "../../entities/user.entity";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { UserRepository } from "../application/user.repository";
import { UserModel } from "../domain/user.model";
import yenv from 'yenv';

const env = yenv()

export class UserOperation extends OperationRepository<UserEntity> implements UserRepository {

    constructor(){
        super(UserEntity)
    }

    async getOne(id: number): Promise<UserEntity>{
        const repository : Repository<UserEntity> = getRepository(UserEntity)
        const data : UserEntity = await repository.findOne({where:{id}, relations:["roles"]})
        return data
    }

    async getPage(page: number): Promise<{data:UserEntity[], total:number}>{
        const repository : Repository<UserEntity> = getRepository(UserEntity)
        const [data, total] = await repository.findAndCount(
            {
                skip: (page - 1) * env.DATABASE.PAGE_SIZE,
                take: env.DATABASE.PAGE_SIZE,
                relations:['roles']
            });
        return {data, total}
    }

}