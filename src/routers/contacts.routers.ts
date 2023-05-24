import { Router } from "express"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import ensureDataValidMiddleware from "../middlewares/users/ensureDataValid.middlewares"
import { contactCreatetSchema, updateContactSchema } from "../schemas/contacts.schemas"
import { createContactController, deleteContactController, retriveContactController, updateContactController } from "../controllers/contacts.controllers"
import ensureIsOwnerMiddleware from "../middlewares/users/ensureIsOwner.middlewares"
import ensureUserExistsMiddleware from "../middlewares/users/ensureUserExists.middlewares"
import ensureIsOwnerContactMiddleware from "../middlewares/contacts/ensureIsOwnerContact.middlewares"
import ensureContactExistsMiddleware from "../middlewares/contacts/ensureContactExists.middlewares"

const contactRoutes: Router = Router()

contactRoutes.post(
    "",
    ensureTokenValidMiddleware,
    ensureDataValidMiddleware(contactCreatetSchema),
    createContactController
)
contactRoutes.get(
    "/users/:id",
    ensureTokenValidMiddleware,
    ensureUserExistsMiddleware,
    ensureIsOwnerMiddleware, 
    retriveContactController
)
contactRoutes.patch(
    "/:id",
    ensureTokenValidMiddleware,
    ensureContactExistsMiddleware,
    ensureIsOwnerContactMiddleware,
    ensureDataValidMiddleware(updateContactSchema),
    updateContactController
)
contactRoutes.delete(
    "/:id",
    ensureTokenValidMiddleware,
    ensureContactExistsMiddleware,
    ensureIsOwnerContactMiddleware,
    deleteContactController
)

export default contactRoutes