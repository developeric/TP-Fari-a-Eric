import { body, param } from "express-validator";
import { ArticleTag } from "../../models/articleTag.model";
import { Article } from "../../models/article.model";

export const articleTagValidator = [
  body("article_id")
    .isInt()
    .withMessage("Tiene que ser un número entero")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .custom(async (value) => {
      const existente = await Article.findByPk(value);
      if (!existente) {
        throw new Error("Ese Articulo NO existe");
      }
      return true;
    }),
];

// article 1(id)
//   Article tag(intermedio)
// tag 1(id)
export const updateArticleTagValidator = [];
