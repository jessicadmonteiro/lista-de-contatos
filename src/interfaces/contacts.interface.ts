import { z } from "zod"
import { contactCreatetSchema, returnContactSchema } from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"
import { userUpdateSchema } from "../schemas/users.schemas"

type iContact = z.infer<typeof contactCreatetSchema>
type iContactReturn = z.infer<typeof returnContactSchema>
type iContactUpdate = DeepPartial<iContact>
type iContactUpdated = z.infer<typeof userUpdateSchema>

export {
    iContact,
    iContactReturn,
    iContactUpdate,
    iContactUpdated
}
