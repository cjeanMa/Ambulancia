import { Application } from "express";
import { IServerBootstrap } from "./server.interface";
import http from 'http';
import app from '../app';
import ServerAbstract from "./server.abstract";


// export class ServerBootstrap implements IServerBootstrap {
export class ServerBootstrap extends ServerAbstract{
    /*     private app:Application;
    
        constructor(app:Application){
            this.app = app
        } */

    constructor(private app: Application) { 
        super();
    }

    initialize(): Promise<any> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(app);
            server
                .listen(3000)
                .on("listening", () => {
                    console.log(`running in port ${3000}`);
                    resolve(true);
                })
                .on("error", error => {
                    console.log(error);
                    reject(error);
                })
        })
    }

}