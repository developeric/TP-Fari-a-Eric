import { Router } from "express";
import { createTag, getTag, getTagByPK } from "../controllers/tag.controllers.js";
import { createTagValidator, deleteTagValidator, getTagByPKValidator, updateTagValidator } from "../middlewares/validations/tag.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";

export const routerTag = Router();
routerTag.use(authMiddleware)

routerTag.post("/tag",authAdmin,createTagValidator,aplicarValidaciones, createTag);
routerTag.post("/tag/:id", updateTagValidator,aplicarValidaciones, createTag);
routerTag.post("/tag", getTag);
routerTag.post("/tag/:id", getTagByPKValidator,aplicarValidaciones,createTag);
routerTag.post("/tag/:id", deleteTagValidator,aplicarValidaciones,createTag);
