import { Tag } from "../models/tag.model.js";

export const createTag = async (req, res) => {
  try {
    const { id, name } = req.body;
    const tag = await Tag.create(req.boy);
    if (tag) {
      return res.status(201).json(tag);
    }
  } catch (error) {
    res.status(400).json({ Message: "Internal Server Error del CREATE" });
    console.log(error);
  }
};
