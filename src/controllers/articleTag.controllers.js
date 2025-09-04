import { ArticleTag } from "../models/articleTag.model.js";

export const createArticleTag = async (req, res) => {
  try {
    const {id} = req.body
    const articletag = await ArticleTag.create(req.body);
    if (articletag) {
      return res.status(201).json(articletag);
    }
  } catch (error) {
      res
      .status(500)
      .json({ Message: "Internal Server Error del create" });
      console.log(error);
  }
};
