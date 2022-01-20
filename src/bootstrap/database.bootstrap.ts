import { IServerBootstrap } from "./server.interface";
import yenv from "yenv";
import {Connection, createConnection} from "typeorm";

const env = yenv()

let client: Connection;

export class DatabaseBootstrap implements IServerBootstrap{
    initialize(): Promise<any> {
        return new Promise((resolve, reject)=>{
            const parametersConnection={
                host: env.DATABASE.MYSQL.HOST,
                type: env.DATABASE.MYSQL.TYPE,
                username: env.DATABASE.MYSQL.USERNAME,
                password: env.DATABASE.MYSQL.PASSWORD,
                database: env.DATABASE.MYSQL.DATABASE,
                port:env.DATABASE.MYSQL.PORT,
                entities: [env.DATABASE.MYSQL.ENTITIES],
                synchronize: env.DATABASE.MYSQL.SYNCHRONIZE,
                extra:{connectionLimit: 10}
            }
            
            createConnection(parametersConnection)
            .then(connection =>{
                client = connection;
                console.log("Connection with db success")
                resolve(true)
            }, error =>{
                console.log(error)
                reject(error)
            })

        })

    }


    closeConnection():void {
        try{
            client.close()
        }
        catch(error){
            console.log(error)
        }
    }
}