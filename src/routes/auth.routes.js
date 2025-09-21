import { Router } from "express";
import { Login, Logout, Register } from "../controllers/auth.controllers.js";
// import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";

export const routerAuth = Router();
// routerAuth.use(aplicarValidaciones)

//Register
routerAuth.post("/auth/register",Register)
//Login
routerAuth.post("/auth/login",Login);
//Logout
routerAuth.post("/auth/logout",authMiddleware,Logout);