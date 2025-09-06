import { body, param } from "express-validator";

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