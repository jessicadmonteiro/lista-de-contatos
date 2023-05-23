import { Request, Response } from "express"
import { iLogin } from "../interfaces/login.interface"
import createLoginService from "../services/login/login.services"

const createLoginController = async (req: Request, res:Response): Promise<Response> => {
    const loginData: iLogin = req.body

    const token = await createLoginService(loginData)

    return res.json({
        token: token
    })
}

export default createLoginController