//Dependencias//
import express from "express";
import "dotenv/config";
// Exportacion de los Archivos//
import { startDB } from "./src/config/database.js";
import { routerTag } from "./src/routes/tag.routes.js";
import { routerArticleTag } from "./src/routes/articleTag.routes.js";
import { routerArticle } from "./src/routes/article.routes.js";
import { routerAuth } from "./src/routes/auth.routes.js";
import { routerProfile } from "./src/routes/profile.routes.js";
import cookieParser from "cookie-parser";
//
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.use(cookieParser());
// Las API
app.use("/api", routerArticle);
app.use("/api", routerArticleTag);
app.use("/api", routerTag);
app.use("/auth", routerAuth);
app.use("/auth", routerProfile);

startDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Ejecutando en http://localhost:${PORT}`);
  });
});
