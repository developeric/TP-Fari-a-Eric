import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";
import { createUserValidator } from "../middlewares/validations/user.validation.js";
import { controllers } from "../middlewares/validator.js";

export const routerUser = Router()

routerUser.post("/api/user",createUserValidator,controllers,createUser)


