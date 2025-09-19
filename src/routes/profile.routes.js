import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { profile } from "../controllers/auth.controllers.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";

export const routerProfile = Router()

routerProfile.get("/profile",authMiddleware,authAdmin,profile)