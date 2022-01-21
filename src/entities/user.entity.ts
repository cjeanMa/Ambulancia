import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ type: "varchar"})
    refreshToken: string

    @ManyToMany(type=>RoleEntity)
    @JoinTable()
    roles: RoleEntity[]
}