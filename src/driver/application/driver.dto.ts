import { DriverModel } from "../domain/driver.model";

export interface DriverResponseDTO{
    codigo: number,
    nombre: string,
    apellido:string,
    licencia: string
}


export const mappingDriverDto = 
(drivers : DriverModel | DriverModel[]) : DriverResponseDTO | DriverResponseDTO[] =>{
    if(Array.isArray(drivers)){
        return drivers.map(el=>{
            return {
                codigo: el.id,
                nombre: el.name,
                apellido: el.lastname,
                licencia: el.driverLicense
            }
        })
    }
    const {id, name, lastname, driverLicense} = drivers;
    return {codigo:id, nombre:name, apellido:lastname, licencia:driverLicense}
}