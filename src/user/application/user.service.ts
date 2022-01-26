import { v4 as uuidv4 } from 'uuid'
import * as bcryptjs from 'bcryptjs'
import moment from 'moment'
import jwt from 'jwt-simple'
import yenv from 'yenv'

const env = yenv()
export class UserService {

    static async cryptPassword(password: string): Promise<string> {
        return await bcryptjs.hash(password, 10)
    }

    static validatePassword(password: string, passwordCrypt: string): Promise<boolean> {
        return Promise.resolve(true)
    }

    static generateRefreshToken(): Promise<string> {
        return Promise.resolve(uuidv4());
    }

    static async comparePassword(password: string, original: string): Promise<boolean> {
        const result = await bcryptjs.compare(password, original);
        return result
    }

    static generateAccessToken(name: string, photo: string, roles: string[]) {
        const iat = moment().unix();
        const exp = moment().add(env.TOKEN.TIMEOUT, 's').unix()
        console.log(iat, " and ", exp)

        const payload = {
            name,
            photo,
            roles,
            iat,
            exp
        }

        return jwt.encode(payload, env.TOKEN.KEY)

    }

    static async validateJWT(accessToken: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const payload = jwt.decode(accessToken, env.TOKEN.KEY)
                resolve(payload)
            }
            catch (err) {
                if(err.message.toLowerCase() === 'token expired'){
                    reject({
                        status: 409,
                        message: "Access Token Expired"
                    })
                }
                else{
                    reject({
                        status: 401,
                        message: "Unauthorized"
                    })
                }
            }
        })
    }

}