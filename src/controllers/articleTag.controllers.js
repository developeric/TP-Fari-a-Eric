import { where } from "sequelize";
import { ArticleTag } from "../models/articleTag.model.js";


//Create
export const createArticleTag = async (req, res) => {
  try {
    const articletag = await ArticleTag.create(req.body);
    if (articletag) {
      return res.status(201).json(articletag);
    }
  } catch (error) {
    res.status(500).json({ Message: "Internal Server Error del create" });
    console.log(error);
  }
};

//Update
export const updateArticleTag = async (req, res) => {
  try {
    const articletag = await ArticleTag.update(req.body,{
      where: { id: req.params.id },
    });
    if (articletag) {
      return res.status(200).json, articletag;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//GetByPK
export const getArticleTagByPK = async (req, res) => {
  try {
    const articletag = await ArticleTag.findByPk( id );
    if (articletag) {
      return res.status(200).json, articletag;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//Get
export const getArticleTag = async (req, res) => {
  try {
    const articletag = await ArticleTag.findAll();
    if (articletag) {
      return res.status(200).json(articletag);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//Delete
export const deleteArticleTag = async (req, res) => {
  const {articleTagId} = req.params
  try {
    const articletag = await ArticleTag.destroy({
      where: { id: articleTagId },
    });

    if (articletag) {
      return res
        .status(200)
        .json({ Message: "ArticleTag Borrado Exitosamente" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};
