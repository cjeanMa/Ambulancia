import { Application } from "express";
import { IServerBootstrap } from "./server.interface";
import http from 'http';
import app from '../app';
import yenv from 'yenv';
import { AddressInfo } from "net";

const env = yenv();

// export class ServerBootstrap implements IServerBootstrap {
export class ServerBootstrap implements IServerBootstrap{

    constructor(private app: Application) { 
        //super();
    }

    initialize(): Promise<any> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(app);
            server
                .listen(env.PORT)
                .on("listening", () => {
                    console.log(`running application on port ${env.PORT}`);
                    console.log(`or using port of server ${(server.address() as AddressInfo).port}`);
                    resolve(true);
                })
                .on("error", error => {
                    console.log(error);
                    reject(error);
                })
        })
    }

}