import { Repository } from "typeorm"
import { iContact } from "../../interfaces/contacts.interface"
import { Contact } from "../../entities/contact.entities"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors"
import { contactCreatetSchema } from "../../schemas/contacts.schemas"

const createContactService = async (contactData: iContact, idUser: number): Promise<iContact> => {

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

    const contact = contactRepository.create({
        username: contactData.username,
        telephone: contactData.telephone,
        user
    })

    await contactRepository.save(contact)

    return contactCreatetSchema.parse(contact)

}

export default createContactService