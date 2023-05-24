import { Repository } from "typeorm"
import { iLogin } from "../../interfaces/login.interface"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import  jwt  from "jsonwebtoken"
import "dotenv/config"

const createLoginService = async (loginData: iLogin): Promise<string> => {

    const userRository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRository.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError("Credenciais inválidas", 401)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch){
        throw new AppError("Credenciais inválidas", 401)
    }

    const token: string = jwt.sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )

    return token
}

export default createLoginService