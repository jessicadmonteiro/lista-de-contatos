import "express-async-errors"
import { handleErros } from "./errors"
import express, { Application } from "express"
import cors from "cors"
import { userRoutes } from "./routers/users.routers"
import loginRoutes from "./routers/login.routers"
import contactRoutes from "./routers/contacts.routers"


const app: Application = express()
app.use(express.json())

app.use(cors())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactRoutes)

app.use(handleErros)
export default app