import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { User } from "../../entities/user.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

const ensureEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({

        where: {
            email: req.body.email
        }
    })

    if(findUser){
        throw new AppError("E-mail já existe", 409)
    }

    return next()
}

export default ensureEmailExistsMiddleware