import { body, param } from "express-validator";
import { User } from "../../models/user.model.js";

export const createUserValidator = [
  body("username")
    .notEmpty()
    .withMessage("No puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 20 })
    .withMessage("Tiene que tener entre 3-20 Caracteres")
    .custom(async () => {
      const existente = await User.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
    }),

  body("email")
    .isEmail()
    .withMessage("Tiene que ser un email Valido")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isLength({ max: 100 })
    .withMessage("Tiene un limite de 100 Caracteres")
    .custom(async () => {
      const existente = User.findOne({ where: { email: value } });
      if (existente) {
        return res.status(400).json("Ya está registrado este Email");
      }
    }),

  body("password")
    .notEmpty()
    .withMessage("Este Campo no puede estar vacío")
    .isString()
    .withMessage("Este campo tiene que contener STRING`S")
    .isLength({ max: 255 })
    .withMessage("Tiene un limite de 255 Caracteres"),
]