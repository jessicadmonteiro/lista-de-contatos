import { Request, Response, NextFunction } from "express"
import { AppError } from "../../errors"

const ensureIsOwnerMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<Response | void>  => {

    const userId: number = parseInt(req.params.id)
    const idUserLogged: number = parseInt(res.locals.userId)

    if(userId !== idUserLogged){
        throw new AppError("Permissão insuficiente", 403)
    }

    return next()

}

export default ensureIsOwnerMiddleware