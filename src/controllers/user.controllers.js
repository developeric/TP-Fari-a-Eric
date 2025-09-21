import { where } from "sequelize";
import { User } from "../models/user.model.js";
import { Profile } from "../models/profile.model.js";

//Update
export const updateUser = async (req, res) => {
  const {id} = req.userLogueado
  try {
    const [updated]= await User.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(400).json({msg:"No se ha Actualizado"});
    }
  return res.status(200).json({msg:`Se han actualizado: ${updated} columnas`});
  } catch (error) {

  
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//GetByPK
export const getUserByPK = async (req, res) => {
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
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//Delete
export const deleteUser = async (req, res) => {
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

export const UserWithAll = async (req, res) => {
  const user = req.userLogueado;
  console.log(user);
  try {
    await User.findByPk(user.id, {
      include: [
        {
          model: Profile,
          as: "profile",
        },
      ],
    });

    return res.status(200).json({ ok: true, msg: "Encontrado", data: user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "No se ha podido obtener el User con su Profile & Articles",
    });
  }
};
