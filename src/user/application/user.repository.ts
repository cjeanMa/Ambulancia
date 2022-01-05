import { GeneralRepository } from "../../shared/application/general.repository";
import { UserModel } from "../domain/user.model";

export interface UserRepository extends GeneralRepository<UserModel>{

/*     list():Promise<UserModel[]>;
    getOne(id: number):Promise<UserModel>;
    getPage(page:number):Promise<UserModel[]>;
    create(user:Partial<UserModel>): Promise<UserModel>;
    update(id:number, user:Partial<UserModel>): Promise<UserModel>;
    delete(id: number): Promise<UserModel>; */

}