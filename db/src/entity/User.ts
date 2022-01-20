import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Car } from "./Car"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    password:string
    @Column()
    photo: string
    @Column()
    roles: string
    @OneToMany(type=>Car, car=>car.user)
    @JoinColumn()
    cars:Car[]
}