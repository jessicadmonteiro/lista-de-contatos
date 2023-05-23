import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { User } from "../../entities/user.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRpository: Repository<User> = AppDataSource.getRepository(User)

    const findUser =  await userRpository.findOne({

        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findUser){
        throw new AppError("Usuário não encontrado", 404)
    }

    return next()
}

export default ensureUserExistsMiddleware