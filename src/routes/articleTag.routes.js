import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/articleTag.controllers.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import {createArticleTagValidator, deleteArticleTagValidator } from "../middlewares/validations/articleTag.validation.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { Owner } from "../middlewares/ownerMiddleware.js";


export const routerArticleTag =  Router();
routerArticleTag.use(aplicarValidaciones)

routerArticleTag.post("/article-tags",authMiddleware,Owner,createArticleTagValidator,createArticleTag)
routerArticleTag.delete("/article-tags/:articleTagId",authMiddleware,Owner,deleteArticleTagValidator,deleteArticleTag)