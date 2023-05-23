import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"

class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 400){
        super(message)
        this.statusCode = statusCode
    }
}

const handleErros = (error: any, req: Request, res: Response, _:NextFunction) => {

    if(error instanceof AppError){

        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    if(error instanceof ZodError){

        return res.status(400).json({
            message: error.flatten().fieldErrors 
        }) ||
        res.status(400).json({
            driverError: error.flatten().fieldErrors
        })
    }


    return res.status(500).json({
        message: "Erro do Servidor Interno"
    })
}

export{
    AppError,
    handleErros
}