import { Router } from "express";
import { createTag } from "../controllers/tag.controllers.js";
import { createTagValidator } from "../middlewares/validations/tag.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";

export const routerTag = Router();

routerTag.post("/tag", createTagValidator, aplicarValidaciones, createTag);
