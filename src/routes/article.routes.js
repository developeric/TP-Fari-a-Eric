import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByPK, updateArticle } from "../controllers/article.controllers.js";
import { createArticleValidator } from "../middlewares/validations/article.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";


export const routerArticle = Router();

routerArticle.post("/article",createArticleValidator,aplicarValidaciones,createArticle)
routerArticle.put("/article/:id",updateArticle)
routerArticle.get("/article",getArticle)
routerArticle.get("/article/:id",getArticleByPK)
routerArticle.delete("/article/:id",deleteArticle)