import { Request, Response } from "express"
import { iContact } from "../interfaces/contacts.interface"
import createContactService from "../services/contacts/createContact.services"
import retriveContactService from "../services/contacts/retriveContact.services"
import updateContactService from "../services/contacts/updateContact.services"
import deleteContactService from "../services/contacts/deleteContact.services"

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const contactData: iContact = req.body
    const idUser: number = parseInt(res.locals.userId)

    const contact = await createContactService(contactData, idUser)

    return res.status(201).json(contact)
}

const retriveContactController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(req.params.id)

    const contact = await retriveContactService(userId)

    return res.json(contact)
}

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const contactData = req.body
    const idContact = parseInt(req.params.id)

    const updateContact = await updateContactService(contactData, idContact)

    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {

    await deleteContactService(parseInt(req.params.id))

    return res.status(204).send()
    
}

export {
    createContactController,
    retriveContactController,
    updateContactController,
    deleteContactController
}