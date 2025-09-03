import { body, param } from "express-validator";
import { User } from "../../models/user.model";

export const createUserValidator = [
  body("username")
    .custom(async () => {
      const existente = await User.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
    })
    .notEmpty()
    .withMessage("No puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 20 })
    .withMessage("Tiene que tener entre3-20 Caracteres"),

    body("email")
];

