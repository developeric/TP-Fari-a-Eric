import { Router } from "express";
import { createTag } from "../controllers/tag.controllers.js";
import { controllers } from "../middlewares/validations/validator.js";
import { createTagvalidator } from "../middlewares/validations/tag.validation.js";

export const routerTag = Router();

routerTag.post("/tag", createTagvalidator, controllers, createTag);
