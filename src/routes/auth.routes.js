import { Router } from "express";
import { Login, Logout, Register } from "../controllers/auth.controllers.js";
import { createUserValidator } from "../middlewares/validations/user.validation.js";
import { createProfileValidator } from "../middlewares/validations/profile.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";

export const routerAuth = Router();

routerAuth.post(
  "/register",
  createUserValidator,
  createProfileValidator,
  aplicarValidaciones,
  Register
);
routerAuth.post("/login",Login);
routerAuth.post("/logout",authMiddleware,Logout);
// routerAuth.put("/")
// routerAuth.get("/")
// routerAuth.get("/")
// routerAuth.delete("/")
