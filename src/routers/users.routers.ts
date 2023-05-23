import { Router } from "express"
import { createUserController } from "../controllers/users.controller"
import ensureEmailExistsMiddleware from "../middlewares/users/ensureEmailExists.middlewares"
import ensureDataValidMiddleware from "../middlewares/users/ensureDataValid.middlewares"
import { userCreateSchema } from "../schemas/users.schemas"


const userRoutes: Router = Router()

userRoutes.post(
 "", ensureDataValidMiddleware(userCreateSchema), ensureEmailExistsMiddleware, createUserController
)

export{ userRoutes }