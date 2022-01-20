import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: "role"})
export class RoleEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @ManyToMany(type=>UserEntity, user=>user.roles)
    @JoinTable()
    users:UserEntity[]
}