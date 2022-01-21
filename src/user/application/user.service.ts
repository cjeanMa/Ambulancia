import {v4 as uuidv4} from 'uuid'
export class UserService{

    static cryptPassword(password:string):Promise<string>{
        return Promise.resolve(`Encrypt_${password}`)
    }

    static validatePassword(password:string, passwordCrypt:string):Promise<boolean>{
        return Promise.resolve(true)
    }

    static generateRefreshToken():Promise<string>{
        return Promise.resolve(uuidv4());
    }

}