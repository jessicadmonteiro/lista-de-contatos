import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { Contact } from "../../entities/contact.entities"

const ensureContactExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact =  await contactRepository.findOne({

        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findContact){
        throw new AppError("Contato não encontrado", 404)
    }

    return next()
}

export default ensureContactExistsMiddleware