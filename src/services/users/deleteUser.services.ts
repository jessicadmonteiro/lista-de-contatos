import { Repository } from "typeorm"
import { User } from "../../entities/user.entities"
import { AppDataSource } from "../../data-source"

const deleteUserService = async (idUser: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({

        where:{
            id: idUser
        }
    })

    await userRepository.remove(user!)
}

export default deleteUserService