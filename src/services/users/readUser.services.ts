import { Repository } from "typeorm"
import { iUsersArray } from "../../interfaces/users.interface"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { arrayUserSchema } from "../../schemas/users.schemas"

const readUserService = async (): Promise<iUsersArray> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser: Array<User> = await userRepository.find()

    const users: iUsersArray = arrayUserSchema.parse(findUser)

    return users
}

export default readUserService