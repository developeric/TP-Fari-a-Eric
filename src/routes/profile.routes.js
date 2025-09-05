import { Router } from "express";
import { createProfile } from "../controllers/profile.controllers.js";
import { createProfileValidator } from "../middlewares/validations/profile.validation.js";
import { controllers } from "../middlewares/validator.js";


export const routerProfile = Router();

routerProfile.post("/profile",createProfileValidator,controllers,createProfile)