import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByPK, updateArticle } from "../controllers/article.controllers.js";
import { createArticleValidator, deleteArticleValidator, getArticleByPKValidator } from "../middlewares/validations/article.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { updateArticleTagValidator } from "../middlewares/validations/articleTag.validation.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { OwnerOrAdmin } from "../middlewares/ownerMiddleware.js";


export const routerArticle = Router();
routerArticle.use(aplicarValidaciones)

routerArticle.post("/article",authMiddleware,createArticleValidator,createArticle)
routerArticle.put("/article/:id",authMiddleware,OwnerOrAdmin,updateArticleTagValidator,updateArticle)
routerArticle.get("/article",authMiddleware,getArticle)
// routerArticle.get("/article/user",authMiddleware,articleUser)
routerArticle.get("/article/:id",authMiddleware,getArticleByPKValidator,getArticleByPK)
routerArticle.delete("/article/:id",authMiddleware,OwnerOrAdmin,deleteArticleValidator,deleteArticle)