//Dependencias//
import express from "express";
import dotenv from "dotenv";
// Exportacion de los Archivos//
import { startDB } from "./src/config/database.js";
import { routerUser } from "./src/routes/user.routes.js";
import { routerTag } from "./src/routes/tag.routes.js";
import { routerProfile } from "./src/routes/profile.routes.js";
import { routerArticleTag } from "./src/routes/articleTag.routes.js";
import { routerArticle } from "./src/routes/article.routes.js";
//
dotenv.config();
//
const app = express();
app.use(express.json());
const PORT = process.env.PORT
// Las API
app.use("/api", routerArticle);
app.use("/api", routerArticleTag);
app.use("/api", routerProfile);
app.use("/api", routerTag);
app.use("/api", routerUser);

startDB().then(async() => {
  app.listen(PORT, () => {
    console.log(`Ejecutando en http://localhost:${PORT}`);
  });
});
