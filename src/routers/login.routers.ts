import { Router } from "express"
import ensureDataValidMiddleware from "../middlewares/users/ensureDataValid.middlewares"
import { createLoginSchema } from "../schemas/login.schemas"
import createLoginController from "../controllers/login.controllers"

const loginRoutes: Router = Router()

loginRoutes.post(
    "",
    ensureDataValidMiddleware(createLoginSchema),
    createLoginController
)

export default loginRoutes