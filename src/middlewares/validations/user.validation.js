import { body, param } from "express-validator";
import { User } from "../../models/user.model.js";

export const createUserValidator = [
  body("username")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { username: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
      return true;
    })
    .notEmpty()
    .withMessage("No puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 20 })
    .withMessage("Tiene que tener entre3-20 Caracteres"),

  body("email")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { email: value } });
      if (existente) {
        return res.status(400).json("Ya está registrado este Email");
      }
      return true;
    })
    .isEmail()
    .withMessage("Tiene que ser un email Valido")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isLength({ max: 100 })
    .withMessage("Tiene un limite de 100 Caracteres"),

  body("password")
    .notEmpty()
    .withMessage("Este Campo no puede estar vacío")
    .isString()
    .withMessage("Este campo tiene que contener STRING`S")
    .isLength({ max: 255 })
    .withMessage("Tiene un limite de 255 Caracteres")
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "Su contraseña debe contener 8 caracteres,una mayuscula, minusculas y numeros"
    ),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("El rol asignado tiene que ser USER o ADMIN")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío"),
];

export const updateUserValidator = [
  body("username")
    .optional()
    .notEmpty()
    .withMessage("No puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 20 })
    .withMessage("Tiene que tener entre3-20 Caracteres")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { username: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
      return true;
    }),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Tiene que ser un email Valido")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isLength({ max: 100 })
    .withMessage("Tiene un limite de 100 Caracteres")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { email: value } });
      if (existente) {
        return res.status(400).json("Ya está registrado este Email");
      }
      return true;
    }),

  body("password")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar vacío")
    .isString()
    .withMessage("Este campo tiene que contener STRING`S")
    .isLength({ max: 255 })
    .withMessage("Tiene un limite de 255 Caracteres")
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "Su contraseña debe contener 8 caracteres,una mayuscula, minusculas y numeros"
    ),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("El rol asignado tiene que ser USER o ADMIN")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío"),
];

export const getUserByPKValidator = [
  param("id")
  .isInt().withMessage("Tiene que ser un Entero")
  .custom(async(value)=>{
    const user = User.findByPk(value)
    if(!user){
      throw new Error ("El User no se ha podido encontrar")
    }
  })
]