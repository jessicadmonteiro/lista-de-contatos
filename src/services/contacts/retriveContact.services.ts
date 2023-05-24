import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { User } from "../../entities/user.entities"

const retriveContactService = async (userId: number) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            contacts: true
        }
    })

    if(!user){
        throw new AppError("Contato não encontrado", 404)
    }

    if(user){
        const {password, createdAt, updatedAt, deletedAt, ...userData} = user
        return userData
    }

}


export default retriveContactService





