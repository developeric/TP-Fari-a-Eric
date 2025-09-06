import { Router } from "express";
import { createArticleTag, deleteArticleTag, getArticleTag, getArticleTagByPK, updateArticleTag } from "../controllers/articleTag.controllers.js";
import { createArticleValidator } from "../middlewares/validations/article.validation.js";
import { controllers } from "../middlewares/validator.js";


export const routerArticleTag =  Router();

routerArticleTag.post("/articletag",createArticleValidator,controllers,createArticleTag)
routerArticleTag.put("/article/:id",updateArticleTag)
routerArticleTag.get("/article",getArticleTag)
routerArticleTag.get("/article/:id",getArticleTagByPK)
routerArticleTag.delete("/article/:id",deleteArticleTag)