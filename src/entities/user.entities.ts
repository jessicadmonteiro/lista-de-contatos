import { getRounds, hashSync } from 'bcryptjs'
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    
    BeforeInsert,
    BeforeUpdate,
} from "typeorm"
import { Contact } from './contact.entities'

@Entity("users")
class User {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 127})
    username: string

    @Column({type: "varchar", length: 45, unique: true})
    email: string

    @Column({type: "varchar", length: 13})
    telephone: string

    @Column({type: "varchar", length: 127})
    password: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts: Contact[]

}

export {
    User
}