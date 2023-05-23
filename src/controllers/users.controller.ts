import {Request, Response} from "express"
import createUserService from "../services/users/createUser.services"
import { iUser } from "../interfaces/users.interface"
import readUserService from "../services/users/readUser.services"
import deleteUserService from "../services/users/deleteUser.services"
import updateUserService from "../services/users/updateUser.services"
import retriveUserService from "../services/users/retriveUser.services"

const createUserController = async (req: Request, res: Response): Promise<Response> => {
    
    const userData: iUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const readUserController = async (req: Request, res: Response): Promise<Response> => {

    const users = await readUserService()

    return res.json(users)
}

const retriveUserController = async (req: Request, res: Response): Promise<Response> => {

    const idUser = parseInt(req.params.id)
    
    const user = await retriveUserService(idUser)

    return res.json(user)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    await deleteUserService(parseInt(req.params.id))

    return res.status(204).send()
    
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData = req.body
    const idUser = parseInt(req.params.id)

    const updateUser = await updateUserService(userData, idUser)

    return res.json(updateUser)
}

export {
    createUserController,
    readUserController,
    retriveUserController,
    deleteUserController,
    updateUserController
}