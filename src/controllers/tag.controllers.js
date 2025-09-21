import { where } from "sequelize";
import { Tag } from "../models/tag.model.js";
import { Article } from "../models/article.model.js";
import { ArticleTag } from "../models/articleTag.model.js";

//Create
export const createTag = async (req, res) => {
  const { name } = req.body;
  try {
    const tag = await Tag.create(req.body);
    if (tag) {
      return res.status(201).json(tag);
    }
  } catch (error) {
    res.status(400).json({ Message: "Internal Server Error del CREATE" });
    console.log(error);
  }
};

//Update
export const updateTag = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const tag = await Tag.update(req.body, { where: { id: req.params.id } });
    if (!tag) {
      return res.status(400).json({ msg: "No actualizado", data: null });
    }
    return res
      .status(200)
      .json({ msg: "Actualizado Correctamente", data: tag });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//GetByPK
export const getTagByPK = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findByPk(id, {
      include: [
        {
          model: Article,
          as: "article",
          attributes: ["id", "title", "content", "excerpt"],
        },
      ],
    });
    if (!tag) {
      return res
        .status(404)
        .json({ msg: "No se ha encontrado la Tag", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Se ha encontrado la Tag", data: tag });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Get
export const getTag = async (req, res) => {
  try {
    const tag = await Tag.findAll();
    if (!tag) {
      return res
        .status(400)
        .json({ msg: "No se han encontrado las Tags", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Se han encontrado las Tags", data: tag });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Delete
export const deleteTag = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.destroy({ where: { id} });
    if (!tag) {
      return res.status(400).json({ Message: "No se pudo borrar", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Tag Borrado Exitosamente", data: "Borrado" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};
