import { Repository } from "typeorm"
import { Contact } from "../../entities/contact.entities"
import { iContactReturn, iContactUpdate } from "../../interfaces/contacts.interface"
import { AppDataSource } from "../../data-source";
import { returnContactSchema } from "../../schemas/contacts.schemas"

const updateContactService =async (contactData: iContactUpdate, idContact: number): Promise<iContactReturn> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOneBy({
        id: idContact
    })

    const newData = {
        username: contactData.username || oldContactData!.username,
        email: contactData.email || oldContactData!.email,
        telephone: contactData.telephone || oldContactData!.telephone
    }

    const contact = contactRepository.create({
        ...oldContactData,
        ...newData
    })

    await contactRepository.save(contact)

    const updateContac = returnContactSchema.parse(contact)

    return updateContac
}

export default updateContactService