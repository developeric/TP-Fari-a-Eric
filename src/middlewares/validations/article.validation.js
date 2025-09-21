import { body, param } from "express-validator";
import { Article } from "../../models/article.model.js";

export const createArticleValidator = [
  body("title")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 200 })
    .withMessage("Tiene que contener enre 3-200 caracteres")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),

  body("content")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .isLength({ min: 50 })
    .withMessage("Tiene que contener 50 caracteres por lo menos"),

  body("excerpt")
    .optional()
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),
];

export const updateArticleValidator = [
    body("title")
    .optional()
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ min: 3, max: 200 })
    .withMessage("Tiene que contener enre 3-200 caracteres")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),

  body("content")
  .optional()
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .isLength({ min: 50 })
    .withMessage("Tiene que contener 50 caracteres por lo menos"),

  body("excerpt")
    .optional()
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),
]


export const getArticleByPKValidator = [
  param("id")
    .isInt()
    .withMessage("El valor tiene que ser un entero")
    .custom(async (value) => {
      const profile = await Article.findByPk(value);
      if (!profile) {
        return res.status(404).json("No se ha podido encontrar");
      }
    }),
];


export const deleteArticleValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un valor entero")
    .custom(async (value) => {
      const tag = await Article.destroy(value);
      if (!tag) {
        return res.status(404).json("No se ha podido encontrar");
      }
    }),
];
