import { Repository } from "typeorm"
import { iContact, iContactReturn } from "../../interfaces/contacts.interface"
import { Contact } from "../../entities/contact.entities"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors"
import { returnContactSchema } from "../../schemas/contacts.schemas"

const createContactService = async (contactData: iContact, idUser: number): Promise<iContactReturn> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            id: idUser
        }
    })

    if(!user){
        throw new AppError("Usuário não encontrado", 404)
    }

    const contact = contactRepository.create(contactData)

    await contactRepository.save(contact)

    const newContact = returnContactSchema.parse(contact)

    return newContact

}

export default createContactService