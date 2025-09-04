import express from "express"
import dotenv from "dotenv"
dotenv.config();
import { startDB } from "./src/config/database.js";
import { routerUser } from "./src/routes/user.routes.js";

const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use("/api",routerUser)



startDB().then(()=>{
app.listen(PORT, () => {
  console.log(`Ejecutando en http://localhost:${PORT}`)
})
})
