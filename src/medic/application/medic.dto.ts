import { MedicModel } from "../domain/medic.model";

export interface MedicResponseDTO{
    name: string,
    lastname: string,
    identifier: string
}

export const mappingMedicDTO = (medic : MedicModel | MedicModel[]) : MedicResponseDTO | MedicResponseDTO[] =>{

    if(Array.isArray(medic)){
        const medicResponse : MedicResponseDTO[]= medic.map(el=>{
            return {name : el.name,
                    lastname:  el.lastname,
                    identifier: el.identifier}
        })
        return medicResponse;
    }

    const { name, lastname, identifier } = medic;
    return {name, lastname, identifier};

}