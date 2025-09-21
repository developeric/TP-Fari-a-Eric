import { Router } from "express";
import { createTag, deleteTag, getTag, getTagByPK } from "../controllers/tag.controllers.js";
import { createTagValidator, deleteTagValidator, getTagByPKValidator, updateTagValidator } from "../middlewares/validations/tag.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";

export const routerTag = Router();

routerTag.post("/tag",authMiddleware,authAdmin,createTagValidator,aplicarValidaciones, createTag);
routerTag.put("/tag/:id",authMiddleware,authAdmin,updateTagValidator,aplicarValidaciones, createTag);
routerTag.get("/tag", authMiddleware,getTag);
routerTag.get("/tag/:id", getTagByPKValidator,aplicarValidaciones,getTagByPK);
routerTag.delete("/tag/:id",authMiddleware,authAdmin, deleteTagValidator,aplicarValidaciones,deleteTag);
