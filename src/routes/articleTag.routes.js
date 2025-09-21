import { Router } from "express";
import { createArticleTag, deleteArticleTag, getArticleTag, getArticleTagByPK, updateArticleTag } from "../controllers/articleTag.controllers.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import {createArticleTagValidator, deleteArticleTagValidator, updateArticleTagValidator } from "../middlewares/validations/articleTag.validation.js";
import { getArticleByPKValidator } from "../middlewares/validations/article.validation.js";


export const routerArticleTag =  Router();
routerArticleTag.use(aplicarValidaciones)

routerArticleTag.post("/articletag",createArticleTagValidator,createArticleTag)
routerArticleTag.put("/article/:id",updateArticleTagValidator,updateArticleTag)
routerArticleTag.get("/article",getArticleTag)
routerArticleTag.get("/article/:id",getArticleByPKValidator,getArticleTagByPK)
routerArticleTag.delete("/article/:id",deleteArticleTagValidator,deleteArticleTag)