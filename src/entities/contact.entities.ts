import {
    Entity,
    Column,
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm"
import { User } from "./user.entities"


@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 127})
    username: string

    @Column({type: "varchar", length: 45, unique: true, nullable: true})
    email?: string | null | undefined

    @Column({type: "varchar", length: 13})
    telephone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @ManyToOne(() => User, (user) => user.contacts)
    user: User
}

export {
    Contact
}