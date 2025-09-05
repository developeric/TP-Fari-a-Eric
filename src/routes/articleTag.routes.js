import { Router } from "express";
import { createArticleTag } from "../controllers/articleTag.controllers.js";
import { createArticleValidator } from "../middlewares/validations/article.validation.js";
import { controllers } from "../middlewares/validator.js";


export const routerArticleTag =  Router();

routerArticleTag.post("/articletag",createArticleValidator,controllers,createArticleTag)