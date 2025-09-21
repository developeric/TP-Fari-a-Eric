import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { profile } from "../controllers/auth.controllers.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";
import { updateProfile } from "../controllers/profile.controllers.js";
import { updateProfileValidator } from "../middlewares/validations/profile.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";

export const routerProfile = Router()

routerProfile.get("/auth/profile",authMiddleware,authAdmin,aplicarValidaciones,profile)
routerProfile.put("/auth/profile",authMiddleware,authAdmin,updateProfileValidator,aplicarValidaciones,updateProfile)