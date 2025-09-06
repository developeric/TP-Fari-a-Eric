import { where } from "sequelize";
import { User } from "../models/user.model.js";



//Update
export const updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    if (user) {
      return res.status(200).json, user;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//GetByPK
export const gerUserByPK = async (req, res) => {
  try {
    const user = await User.findByPk({ id });
    if (user) {
      return res.status(200).json, user;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Get
export const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    if (user) {
      return res.status(200).json, user;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Delete
export const deleteUser = async (req,res) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    if (user) {
      return res
        .status(200)
        .json({ Message: " User Eliminado de manera exitosa" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};
