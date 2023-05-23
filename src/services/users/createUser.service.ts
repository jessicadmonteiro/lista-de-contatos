import { AppDataSource } from "../../data-source"
import { iUser, iUserReturn } from "../../interfaces/users.interface"
import { User } from "../../entities/user.entities"
import { Repository } from "typeorm"
import { returnUserSchema } from "../../schemas/users.schemas"

const createUserService = async (userData: iUser): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)
    
    return newUser
}

export default createUserService