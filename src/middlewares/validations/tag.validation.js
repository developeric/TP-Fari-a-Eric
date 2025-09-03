import { body, param } from "express-validator";

export const createTagvalidator = [
  body("name")
    .custom(async () => {
      const existente = await User.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
    })
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 2, max: 30 })
    .withMessage("Tiene que tener entre 3-20 caracteres"),
];
