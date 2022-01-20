import { getRepository, ObjectType, Repository } from 'typeorm'
import yenv from 'yenv'

const env = yenv();

export abstract class OperationRepository<T>{
    // private entity: ObjectType<T>
    constructor(private entity: ObjectType<T>){
        // this.entity = entity
    }

    async getOne(id: number): Promise<T>{
        const repository : Repository<T> = getRepository(this.entity)
        const data : T = await repository.findOne({where:{id}})
        return data
    }

    async getPage(page: number): Promise<{ data: T[]; total: number; }> {
        const repository: Repository<T> = getRepository(this.entity);
        const [data, total] = await repository.findAndCount(
            {
                skip: (page - 1) * env.DATABASE.PAGE_SIZE,
                take: env.DATABASE.PAGE_SIZE
            });
        return Promise.resolve({ data, total })
    }

    async update(id: number, entity: Partial<T>): Promise<T> {
        const repository: Repository<T> = getRepository(this.entity);
        const dataToUpdate = await repository.findOne({ where: { id } })
        const dataUpdated = Object.assign(dataToUpdate, entity);
        const data = await repository.save(dataUpdated)
        return Promise.resolve(data as T);
    }

    async delete(id: number): Promise<T> {
        const repository: Repository<T> = getRepository(this.entity);
        const data = await repository.findOne({ where: { id } })
        if (data) {
            await repository.delete(id)
            return data
        }
        return null
    }

    async list(
        where:object = {},
        relations:string[] = [],
        order:object = {} 
    ): Promise<T[]> {
        const repository: Repository<T> = getRepository(this.entity);
        const data = await repository.find({
            where,
            relations,
            order
        })
        
        return data
    }

    async create(entity: T): Promise<T> {
        const repository: Repository<T> = getRepository(this.entity);
        const data:T = await repository.save(entity)
        return data
    }

}