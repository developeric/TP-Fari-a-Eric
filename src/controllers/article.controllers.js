import { Article } from "../models/article.model.js";

export const createArticle = async (req, res) => {
  try {
    const { id, title, content, excerpt, status } = req.body;

    const article = await Article.create(req.body);
    if (article) {
      return res.status(201).json(article);
    }
  } catch (error) {
    res.status(400).json({ Message: "Internal Error Server del Create" });
    console.log(error);
  }
};
