import { GeneralRepository } from "../../shared/application/general.repository";
import { DriverRepository } from "../application/driver.repository";
import { DriverModel } from "../domain/driver.model";


export class DriverOperation implements DriverRepository{
    list(): Promise<DriverModel[]> {
        const drivers = [
            {
                id: 10,
                name: "Roberto",
                lastname: "Jacinto",
                driverLicense: "c123",
                isoCountry: "PE"
            },
            {
                id: 11,
                name: "Roberto",
                lastname: "Jacinto",
                driverLicense: "c124",
                isoCountry: "PE"
            }
        ]
        return Promise.resolve(drivers)
    }
    getPage(page: number): Promise<{ data: DriverModel[]; total: number; }> {
        const drivers = [
            {
                id: 10,
                name: "Roberto",
                lastname: "Jacinto",
                driverLicense: "c123",
                isoCountry: "PE"
            },
            {
                id: 11,
                name: "Roberto",
                lastname: "Jacinto",
                driverLicense: "c124",
                isoCountry: "PE"
            }
        ]
        return Promise.resolve({ data: drivers, total: drivers.length })
    }
    getOne(id: number): Promise<DriverModel> {
        const driver =
        {
            id: 10,
            name: "Roberto",
            lastname: "Jacinto",
            driverLicense: "c123",
            isoCountry: "PE"
        }
        return Promise.resolve(driver)
    }
    create(user: Partial<DriverModel>): Promise<DriverModel> {
        const medic = Object.assign({ id: 1234 }, user);
        return Promise.resolve(medic as DriverModel);
    }
    update(id: number, entity: Partial<DriverModel>): Promise<DriverModel> {
        const medic = Object.assign({ id: id }, entity);
        return Promise.resolve(medic as DriverModel);
    }
    delete(id: number): Promise<DriverModel> {
        const driver = {
            id,
            name: "Roberto",
            lastname: "Jacinto",
            driverLicense: "c123",
            isoCountry: "PE"
        }
        return Promise.resolve(driver)
    }

}