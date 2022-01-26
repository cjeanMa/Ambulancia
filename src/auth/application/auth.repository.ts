import { UserEntity } from "../../entities/user.entity";
import { GeneralRepository } from "../../shared/application/general.repository";
import { UserModel } from "../../user/domain/user.model";

export interface AuthRepository{

    findUserByEmail(email:string):Promise<UserModel>
    getUserByRefreshToken(where:string):Promise<UserModel>

}