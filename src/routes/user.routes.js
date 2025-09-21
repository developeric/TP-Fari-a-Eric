import { Router } from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { UserWithAll } from "../controllers/user.controllers.js";
import {
  deleteUserValidator,
  updateUserValidator,
} from "../middlewares/validations/user.validation.js";
export const routerUser = Router();


routerUser.get("/user", authMiddleware, authAdmin, getUser);
routerUser.get("/user/:id", authMiddleware, authAdmin, UserWithAll);
routerUser.put(
  "/user/id",
  authMiddleware,
  authAdmin,
  updateUserValidator,
  updateUser
);
routerUser.delete(
  "/user/:id",
  authMiddleware,
  authAdmin,
  deleteUserValidator,
  deleteUser
);
// routerUser.use("/user")
