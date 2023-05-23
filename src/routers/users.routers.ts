import { Router } from "express"
import { createUserController, deleteUserController, readUserController, retriveUserController, updateUserController } from "../controllers/users.controller"
import ensureEmailExistsMiddleware from "../middlewares/users/ensureEmailExists.middlewares"
import ensureDataValidMiddleware from "../middlewares/users/ensureDataValid.middlewares"
import { updateUserSchema, userCreateSchema } from "../schemas/users.schemas"
import ensureUserExistsMiddleware from "../middlewares/users/ensureUserExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import ensureIsOwnerMiddleware from "../middlewares/users/ensureIsOwner.middlewares"


const userRoutes: Router = Router()

userRoutes.post(
 "",
 ensureDataValidMiddleware(userCreateSchema),
 ensureEmailExistsMiddleware,
 createUserController
)
userRoutes.get(
    "",
    ensureTokenValidMiddleware,
    readUserController
)
userRoutes.get(
    "/:id",
    ensureTokenValidMiddleware,
    ensureIsOwnerMiddleware,
    ensureUserExistsMiddleware,
    retriveUserController
)
userRoutes.delete(
    "/:id",
    ensureTokenValidMiddleware,
    ensureIsOwnerMiddleware,
    ensureUserExistsMiddleware,
    deleteUserController
)
userRoutes.patch(
    "/:id",
    ensureTokenValidMiddleware,
    ensureIsOwnerMiddleware,
    ensureUserExistsMiddleware,
    ensureDataValidMiddleware(updateUserSchema),
    updateUserController
)

export{ userRoutes }