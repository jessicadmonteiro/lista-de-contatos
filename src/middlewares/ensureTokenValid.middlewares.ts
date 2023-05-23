import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors"

const ensureTokenValidMiddleware = (req: Request, res: Response, next: NextFunction): Response | void =>{
    let token = req.headers.authorization

    if(!token){

        throw new AppError("Token inválido", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) =>{
        
        if(error){
            
            throw new AppError(error.message, 401) 
        }

        res.locals.userId = decoded.sub

        return next()
    })
}

export {
    ensureTokenValidMiddleware
}