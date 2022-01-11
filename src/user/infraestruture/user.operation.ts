import { UserRepository } from "../application/user.repository";
import { UserModel } from "../domain/user.model";

export class UserOperation implements UserRepository {
    getOne(id: number): Promise<UserModel> {
        return Promise.resolve({
            id,
            name: "camilo",
            email: "camilo@g.com",
            password: "caballo",
            photo: "paht/path.jopg",
            roles: ['ADMIN']
        })
    }
    getPage(page: number): Promise<{data:UserModel[], total:number}> {
        const users = [
            {
                id: 1,
                name: "camilo",
                email: "camilo@g.com",
                password: "caballo",
                photo: "paht/path.jopg",
                roles: ['ADMIN']
            },
            {
                id: 2,
                name: "luz marina",
                email: "luz@g.com",
                password: "caballa",
                photo: "paht/path.jopg",
                roles: ['ADMIN']
            },
        ];

        return Promise.resolve({data:users, total:users.length});
    }
    delete(id: number): Promise<UserModel> {
        return  Promise.resolve({
            id: 1,
            name: "camilo",
            email: "camilo@g.com",
            password: "caballo",
            photo: "paht/path.jopg",
            roles: ['ADMIN']
        })
    }
    list(): Promise<UserModel[]> {
        const users = [
            {
                id: 1,
                name: "camilo",
                email: "camilo@g.com",
                password: "caballo",
                photo: "paht/path.jopg",
                roles: ['ADMIN']
            },
            {
                id: 2,
                name: "luz marina",
                email: "luz@g.com",
                password: "caballa",
                photo: "paht/path.jopg",
                roles: ['ADMIN']
            },
        ];

        return Promise.resolve(users);
    }
    create(user: Partial<UserModel>): Promise<UserModel> {
        return Promise.resolve( { id: 3, ...user } as UserModel);
    }

    update(id: Number, user: Partial<UserModel>): Promise<UserModel> {

        return Promise.resolve({ id, ...user } as UserModel);
    }

}