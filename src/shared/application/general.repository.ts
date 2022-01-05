import { GenericRepository } from "./base.class";

export interface GeneralRepository<T> extends GenericRepository<T>{
    list():Promise<T[]>;
    getPage(page:number):Promise<{data: T[], total: number}>;
}