import { Router } from "express"
import { createUserController, deleteUserController, readUserController, retriveUserController, updateUserController } from "../controllers/users.controller"
import ensureEmailExistsMiddleware from "../middlewares/users/ensureEmailExists.middlewares"
import ensureDataValidMiddleware from "../middlewares/users/ensureDataValid.middlewares"
import { updateUserSchema, userCreateSchema } from "../schemas/users.schemas"
import ensureUserExistsMiddleware from "../middlewares/users/ensureUserExists.middlewares"


const userRoutes: Router = Router()

userRoutes.post(
 "",
 ensureDataValidMiddleware(userCreateSchema),
 ensureEmailExistsMiddleware,
 createUserController
)
userRoutes.get(
    "", readUserController
)
userRoutes.get(
    "/:id",
    ensureUserExistsMiddleware,
    retriveUserController
)
userRoutes.delete(
    "/:id",
    ensureUserExistsMiddleware,
    deleteUserController
)
userRoutes.patch(
    "/:id",
    ensureUserExistsMiddleware,
    ensureDataValidMiddleware(updateUserSchema),
    updateUserController
)

export{ userRoutes }