import { z } from "zod"

const contactCreatetSchema = z.object({
    username: z.string().min(3).max(45),
    email: z.string().email().max(45).nullish(),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    userId: z.number()
}).omit({
    userId: true
})

const contactUpdateSchema = z.object({
    username: z.string().min(3).max(45),
    email: z.string().email().max(45).nullish(),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    userId: z.number()
}).omit({
    userId: true
})

const returnContactSchema = z.object({
    id: z.number(),
    username: z.string().min(3).max(45),
    email: z.string().email().max(45).nullish(),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    createdAt: z.string(),
    updatedAt: z.string()
})

const updateContactSchema = contactCreatetSchema.partial()


export {
    contactCreatetSchema,
    returnContactSchema,
    contactUpdateSchema,
    updateContactSchema
}