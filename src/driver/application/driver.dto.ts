import { DriverModel } from "../domain/driver.model";

export interface DriverResponseDTO{
    id: number,
    name: string,
    lastname:string
}

export const mappingDriverDto = 
(drivers : DriverModel | DriverModel[]) : DriverResponseDTO | DriverResponseDTO[] =>{
    if(Array.isArray(drivers)){
        return drivers.map(el=>{
            return {
                id: el.id,
                name: el.name,
                lastname: el.lastname
            }
        })
    }
    const {id, name, lastname} = drivers;
    return {id, name, lastname}
}