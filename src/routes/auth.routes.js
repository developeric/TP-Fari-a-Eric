import { Router } from "express";
import { createUserValidator } from "../middlewares/validations/user.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { registerUser } from "../controllers/auth.controllers.js";
import { createProfileValidator } from "../middlewares/validations/profile.validation.js";
export const routerAuth = Router();



routerAuth.post("/auth/register",createUserValidator,createProfileValidator,aplicarValidaciones,registerUser,)