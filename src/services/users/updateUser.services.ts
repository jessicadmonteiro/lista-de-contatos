import { Repository } from "typeorm"
import { iUserReturn, iUserUpdate } from "../../interfaces/users.interface"
import { User } from "../../entities/user.entities"
import { AppDataSource } from "../../data-source"
import { returnUserSchema } from "../../schemas/users.schemas"

const updateUserService = async (userData: iUserUpdate, idUser: number): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const newData = {
        username: userData.username || oldUserData!.username,
        email: userData.email || oldUserData!.email,
        telephone: userData.telephone || oldUserData!.telephone
    }

    const user = userRepository.create({
        ...oldUserData,
        ...newData
    })

    await userRepository.save(user)

    const updateUser = returnUserSchema.parse(user)

    return updateUser
}

export default updateUserService