import { MedicInterface } from "../application/medic.repository";
import { MedicModel } from "../domain/medic.model";

export class MedicOperation implements MedicInterface{
    list(): Promise<MedicModel[]> {
        const medics = [
            {
                id: 12,
                name: "Roberto",
                lastname: "Jacinto",
                identifier: "c123"
            },
            {
                id: 13,
                name: "Maria",
                lastname: "Castro",
                identifier: "c124"
            }
        ]
        return Promise.resolve(medics)
    }
    getPage(page: number): Promise<{ data: MedicModel[]; total: number; }> {
        const medics = [
            {
                id: 12,
                name: "Roberto",
                lastname: "Jacinto",
                identifier: "c123"
            },
            {
                id: 13,
                name: "Maria",
                lastname: "Castro",
                identifier: "c124"
            }
        ]
        return Promise.resolve({data: medics, total: medics.length})
    }
    getOne(id: number): Promise<MedicModel> {
        const medic = {
            id,
            name: "Roberto",
            lastname: "Jacinto",
            identifier: "c123"
        }
        return Promise.resolve(medic)
    }
    create(user: Partial<MedicModel>): Promise<MedicModel> {
        const medic = Object.assign({id: 1234}, user);
        return Promise.resolve(medic as MedicModel);
    }
    update(id: number, entity: Partial<MedicModel>): Promise<MedicModel> {
        const medic = Object.assign({id: id}, entity);
        return Promise.resolve(medic as MedicModel);
    }
    delete(id: number): Promise<MedicModel> {
        const medic = {
            id,
            name: "Roberto Borradin",
            lastname: "Jacinto",
            identifier: "c123"
        }
        return Promise.resolve(medic)
    }

}