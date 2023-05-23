import "express-async-errors"
import { handleErros } from "./errors"
import express, { Application } from "express"
import { userRoutes } from "./routers/users.routers"
import loginRoutes from "./routers/login.routers"


const app: Application = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)

app.use(handleErros)
export default app