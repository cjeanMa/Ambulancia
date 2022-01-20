import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "driver"})
export class DriverEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    lastname:string
    @Column()
    driverLicense:string
    @Column()
    isoCountry:string
}