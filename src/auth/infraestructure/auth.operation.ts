import { getRepository, ObjectType, Repository } from "typeorm";
import { UserEntity } from "../../entities/user.entity";
import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { UserModel } from "../../user/domain/user.model";
import { AuthRepository } from "../application/auth.repository";

export class AuthOperation implements AuthRepository {

    constructor(private userEntity : ObjectType<UserEntity> = UserEntity){}
    
    async findUserByEmail(email:string):Promise<UserModel>{
        const authRepository: Repository<UserEntity> = getRepository(this.userEntity);
        const user = await authRepository.findOne({where:{email}, relations:["roles"]})
        return user
    }
    
    async getUserByRefreshToken(token: string): Promise<UserModel> {
        const authRepository: Repository<UserEntity> = getRepository(this.userEntity);
        const user = await authRepository.findOne({where: {refreshToken: token}, relations:["roles"]})
        return user
    }


}