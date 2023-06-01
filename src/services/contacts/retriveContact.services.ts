import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { User } from "../../entities/user.entities"

const retriveContactService = async (userId: number): Promise <User[]> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: Array<User>= await userRepository.find({
        where: {
            id: userId
        },
        select: {
            username: true,
            email: true,
            telephone:true
        },
        relations: {
            contacts: true
        }
    })

    if(!user){
        throw new AppError("Contato não encontrado", 404)
    }

    return user

}


export default retriveContactService





