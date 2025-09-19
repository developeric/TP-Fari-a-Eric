import { Router } from "express";
import { createArticleTag, deleteArticleTag, getArticleTag, getArticleTagByPK, updateArticleTag } from "../controllers/articleTag.controllers.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { articleTagValidator } from "../middlewares/validations/articleTag.validation.js";


export const routerArticleTag =  Router();

routerArticleTag.post("/articletag",createArticleTag)
routerArticleTag.put("/article/:id",updateArticleTag)
routerArticleTag.get("/article",getArticleTag)
routerArticleTag.get("/article/:id",getArticleTagByPK)
routerArticleTag.delete("/article/:id",deleteArticleTag)