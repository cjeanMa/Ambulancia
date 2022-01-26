import { UserModel } from "../../user/domain/user.model";

export interface AuthResponseDTO{
    name: string,
    email: string,
    photo: string,
    roles:string[]
}


export const mappingAuthDTO = (auth:UserModel) : AuthResponseDTO =>{
    const { name, email, photo, roles} = auth;
    return {name, email, photo, roles:roles.map(el=>el.name)}
}
