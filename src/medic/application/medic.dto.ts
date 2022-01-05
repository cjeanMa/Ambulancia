import { MedicModel } from "../domain/medic.model";

export interface MedicResponseDTO{
    name: string,
    lastname: string
}

export const mappingMedicDTO = (medic : MedicModel | MedicModel[]) : MedicResponseDTO | MedicResponseDTO[] =>{

    if(Array.isArray(medic)){
        const medicResponse : MedicResponseDTO[]= medic.map(el=>{
            return {name : el.name,
                    lastname:  el.lastname}
        })
        return medicResponse;
    }

    const { name, lastname } = medic;
    return {name, lastname};

}