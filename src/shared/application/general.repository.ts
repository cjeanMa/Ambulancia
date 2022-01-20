import { GenericRepository } from "./base.class";

export interface GeneralRepository<T> extends GenericRepository<T>{
    list(where:object,
        relations:string[],
        order:object ):Promise<T[]>;
    getPage(page:number):Promise<{data: T[], total: number}>;
}