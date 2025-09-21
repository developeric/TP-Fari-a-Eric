import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByPK, updateArticle } from "../controllers/article.controllers.js";
import { createArticleValidator, deleteArticleValidator, getArticleByPKValidator } from "../middlewares/validations/article.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { updateArticleTagValidator } from "../middlewares/validations/articleTag.validation.js";


export const routerArticle = Router();
routerArticle.use(aplicarValidaciones)

routerArticle.post("/article",createArticleValidator,createArticle)
routerArticle.put("/article/:id",updateArticleTagValidator,updateArticle)
routerArticle.get("/article",getArticle)
routerArticle.get("/article/:id",getArticleByPKValidator,getArticleByPK)
routerArticle.delete("/article/:id",deleteArticleValidator,deleteArticle)