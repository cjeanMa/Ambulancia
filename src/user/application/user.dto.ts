import { UserModel } from "../domain/user.model";

export interface UserResponseDTO {
    id: number,
    name: string,
    email: string,
    roles: any,
    photo: string
}

export const mappingUserDTO = (data: UserModel | UserModel[]): UserResponseDTO | UserResponseDTO[] => {
    const isArray = Array.isArray(data)
    if (isArray) {
        const newUserResponse: UserResponseDTO[] = [];
        data.forEach(el => {
            const { id, name, email, roles, photo } = el;
            newUserResponse.push({ id, name, email, roles, photo })
        })
        return newUserResponse
    }
    else {
        const { id, name, email, roles, photo } = data;
       /*  let newUserResponse: UserResponseDTO = {
            id,
            name,
            email,
            roles,
            photo
        } 
        return newUserResponse; */

        return { id, name, email, roles, photo };

    }

}