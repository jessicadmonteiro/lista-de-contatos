import { z } from "zod"

const userCreateSchema = z.object({
    username: z.string().min(3).max(45),
    email: z.string().email().max(45),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    password: z.string().min(4).max(120)
})

const userUpdateSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    telephone: z.string()
    .regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/),
    password: z.string().min(4).max(120)
}).omit({
    password: true
})

const returnUserSchema = userCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.date().nullable()
}).omit({
    password: true
})

const arrayUserSchema = returnUserSchema.array()

const updateUserSchema = userCreateSchema.partial()


export {
    userCreateSchema,
    returnUserSchema,
    arrayUserSchema,
    updateUserSchema,
    userUpdateSchema
}