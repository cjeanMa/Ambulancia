import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 50 })
    name: string
    
    @Column({ type: "varchar", length: 50 })
    email: string

    @Column({ type: "varchar", length: 50 })
    password: string

    @Column({ type: "varchar", length: 50 })
    photo: string

    @ManyToMany(type=>RoleEntity, role=>role.users)
    roles: RoleEntity[]
}