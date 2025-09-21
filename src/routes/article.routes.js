import { Router } from "express";
import { ArticlesWithUSer, createArticle, deleteArticle, getArticle, getArticleByPK, updateArticle } from "../controllers/article.controllers.js";
import { createArticleValidator, deleteArticleValidator, getArticleByPKValidator } from "../middlewares/validations/article.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { updateArticleTagValidator } from "../middlewares/validations/articleTag.validation.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { OwnerOrAdmin } from "../middlewares/ownerMiddleware.js";


export const routerArticle = Router();
routerArticle.use(aplicarValidaciones) //tengo q poner dentro de las rutas
routerArticle.use(authMiddleware)

routerArticle.post("/articles",createArticleValidator,createArticle)
routerArticle.get("/articles",getArticle)
routerArticle.get("/articles/user",ArticlesWithUSer)
routerArticle.get("/articles/user/:id",ArticlesWithUSer)
routerArticle.get("/articles/:id",getArticleByPKValidator,getArticleByPK)
routerArticle.put("/articles/:id",OwnerOrAdmin,updateArticleTagValidator,updateArticle)
routerArticle.delete("/articles/:id",OwnerOrAdmin,deleteArticleValidator,deleteArticle)