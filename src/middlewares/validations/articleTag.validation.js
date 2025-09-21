import { body, param } from "express-validator";
import { ArticleTag } from "../../models/articleTag.model.js";

export const createArticleTagValidator = [
  body("article_id")
    .isInt()
    .withMessage("Tiene que ser un número entero")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .custom(async (value) => {
      const existente = await ArticleTag.findByPk(value);
      if (!existente) {
        throw new Error("Ese Articulo NO existe");
      }
      return true;
    }),
];

export const updateArticleTagValidator = [
    body("article_id")
    .optional()
    .isInt()
    .withMessage("Tiene que ser un número entero")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .custom(async (value) => {
      const existente = await ArticleTag.findByPk(value);
      if (!existente) {
        throw new Error("Ese Articulo NO existe");
      }
      return true;
    }),
];


export const getArticleTagByPKValidator = [
  param("id")
    .isInt()
    .withMessage("El valor tiene que ser un entero")
    .custom(async (value) => {
      const profile = await ArticleTag.findByPk(value);
      if (!profile) {
        return res.status(404).json("No se ha podido encontrar");
      }
    }),
];

export const deleteArticleTagValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un valor entero")
    .custom(async (value) => {
      const tag = await ArticleTag.destroy(value);
      if (!tag) {
        return res.status(404).json("No se ha podido encontrar");
      }
    }),
];
