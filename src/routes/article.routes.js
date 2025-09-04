import { Router } from "express";
import { createArticle } from "../controllers/article.controllers.js";
import { createArticleValidator } from "../middlewares/validations/article.validation.js";
import { controllers } from "../middlewares/validations/validator.js";

export const routerArticle = Router();

routerArticle.post("/article",createArticleValidator,controllers,createArticle)