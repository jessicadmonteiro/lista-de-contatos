import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { Contact } from "../../entities/contact.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

const ensureIsOwnerContactMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<Response | void>  => {

    const idUserLogged: number = parseInt(res.locals.userId)

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contac: Contact | null = await contactRepository.findOne({
        where:{
            id: parseInt(req.params.id)
        },
        relations: {
            user: true
        }
    })

    const user = contac?.user.id

    if(user !== idUserLogged){
        throw new AppError("Permissão insuficiente", 403)
    }

    return next()
}

export default ensureIsOwnerContactMiddleware