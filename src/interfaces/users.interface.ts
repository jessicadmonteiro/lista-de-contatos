import { userCreateSchema, returnUserSchema, arrayUserSchema, userUpdateSchema } from "../schemas/users.schemas"
import { z } from "zod"
import { DeepPartial } from "typeorm"

type iUser = z.infer<typeof userCreateSchema>
type iUserReturn = z.infer<typeof returnUserSchema>
type iUsersArray = z.infer<typeof arrayUserSchema>
type iUserUpdate = DeepPartial<iUser>
type iUserUpdated = z.infer<typeof userUpdateSchema>


export {
    iUser,
    iUserReturn,
    iUsersArray,
    iUserUpdate,
    iUserUpdated
}