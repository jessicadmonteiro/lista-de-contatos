import { Repository } from "typeorm"
import { iUserReturn } from "../../interfaces/users.interface"
import { User } from "../../entities/user.entities"
import { AppDataSource } from "../../data-source"
import { returnUserSchema } from "../../schemas/users.schemas"

const retriveUserService = async (idUser: number): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: idUser
    })

    const user: iUserReturn = returnUserSchema.parse(findUser)

    return user
}

export default retriveUserService