import { RoleModel } from "../../role/domain/role.model";
import { UserModel } from "../domain/user.model";
import yenv from 'yenv';

const env = yenv()
export interface UserResponseDTO {
    id: number,
    name: string,
    email: string,
    roles: string[],
    photo: string
}

export const mappingUserDTO = (data: UserModel | UserModel[]): UserResponseDTO | UserResponseDTO[] => {
    const isArray = Array.isArray(data)
    if (isArray) {
        const newUserResponse: UserResponseDTO[] = [];
        data.forEach(el => {
            let { id, name, email, roles, photo } = el;
            const rolesString : string[] = roles.map(el=>el.name)
            newUserResponse.push({ id, name, email, roles:rolesString, photo:generatePhotoUrl(photo) })
        })
        return newUserResponse
    }
    else {
        const { id, name, email, roles, photo } = data;
        return { id, name, email, roles: roles.map(el=>el.name), photo:generatePhotoUrl(photo) };

    }

}

const generatePhotoUrl = (photo:string) :string =>{
    return env.S3.PATH + photo
}