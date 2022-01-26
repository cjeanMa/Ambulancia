import { UserService } from "../../user/application/user.service";
import { UserModel } from "../../user/domain/user.model";
import { AuthResponseDTO, mappingAuthDTO } from "./auth.dto";
import { AuthRepository } from "./auth.repository";
import { Token } from "./token.interface";


export class AuthUseCase{

    constructor(private authOperation: AuthRepository){
    }

    async login(email:string, password:string): Promise<Token>{
        const user : UserModel = await this.authOperation.findUserByEmail(email);
        let result : boolean = false;
        if(user){
            result = await UserService.comparePassword(password, user.password);
            if(result){
                const userResponse : AuthResponseDTO = mappingAuthDTO(user)
                let response = await UserService.generateAccessToken(userResponse.name, userResponse.photo,userResponse.roles)
                return {response, refreshToken: user.refreshToken}
            }
            return null
        }
        return null
    }

    async refreshToken(refreshToken: string){
        const user : UserModel = await this.authOperation.getUserByRefreshToken(refreshToken,);
        if(user){
                const userResponse : AuthResponseDTO = mappingAuthDTO(user)
                let response = await UserService.generateAccessToken(userResponse.name, userResponse.photo,userResponse.roles)
                return {response, refreshToken: user.refreshToken}
        }
        return null
    }
}