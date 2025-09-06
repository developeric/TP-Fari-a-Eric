import { where } from "sequelize";
import { Tag } from "../models/tag.model.js";

//Create
export const createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.boy);
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
  try {
    const tag = await Tag.update(req.body,{ where: { id: req.params.id } });
    if (tag) {
      return res.status(200).json, tag;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//GetByPK
export const getTagByPK = async (req, res) => {
  try {
    const tag = await Tag.findByPk({ id });
    if (tag) {
      return res.status(200).json, tag;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Get
export const getTag = async (req, res) => {
  try {
    const tag = await Tag.findAll();
    if (tag) {
      return res.status(200).json, tag;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Delete
export const deleteTag = async (req, res) => {
  try {
    const tag = await Tag.destroy({ where: { id: req.params.id } });
    if (tag) {
      return res.status(200).json({ Message: "Tag Borrado Exitosamente" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};
