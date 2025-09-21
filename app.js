//Dependencias//
import express from "express";
import "dotenv/config";
// Exportacion de los Archivos//
import { startDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";
import { Allroutes } from "./src/routes/index.js";
//
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.use(cookieParser());
// Las API
app.use("/api",Allroutes)

startDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Ejecutando en http://localhost:${PORT}`);
  });
});
