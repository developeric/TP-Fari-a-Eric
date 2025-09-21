import { body, param } from "express-validator";
import { Tag } from "../../models/tag.model.js";

export const createTagValidator = [
  body("name")
    .custom(async (value) => {
      const existente = await Tag.findOne({ where: { name: value } });
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

export const updateTagValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 2, max: 30 })
    .withMessage("Tiene que tener entre 3-20 caracteres")
    .custom(async (value) => {
      const existente = await Tag.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Ya existe un User con este Nombre");
      }
    }),
];

export const getTagByPKValidator = [
  param("id")
    .isInt()
    .withMessage("El valor tiene que ser un entero")
    .custom(async (value) => {
      const tag = await Tag.findByPk(value);
      if (!tag) {
        return res.status(404).json("No se ha podido encontrar");
      }
      return true
    }),
];

export const deleteTagValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un valor entero")
    .custom(async (value) => {
      const tag = await Tag.findByPk(value);
      if (!tag) {
        return res.status(404).json("No se ha podido encontrar");
      }
      return true
    }),
];
