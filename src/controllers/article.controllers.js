import { where } from "sequelize";
import { Article } from "../models/article.model.js";
import { User } from "../models/user.model.js";

//Create
export const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    if (!article) {
      return res.status(400).json({ msg: "No se ha creado" });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: article });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error en el Create");
  }
};

//Update
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.update(req.body, {
      where: { id: req.params.id },
    });
    if (article) {
      return res.status(200).json, article;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error en el UPDATE");
  }
};

//GetbyPK
export const getArticleByPK = async (req, res) => {
  try {
    const articlebypk = await Article.findByPk({ id });
    if (articlebypk) {
      return res.status(200).json, articlebypk;
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ Message: "Internal Server Error en el GetByPK" });
  }
};

//Get
export const getArticle = async (req, res) => {
  try {
    const getArticle = await Article.findAll();
    if (!getArticle) {
      return res.status(200).json({ msg: "No se pudo Obtener", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido correctamente", data: getArticle });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server en el findAll");
  }
};

//Delete
export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.destroy({ where: { id: req.params.id } });
    if (article) {
      return res.status(200).json({ Message: "Article Borrado Exitosamente" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server en el Delete");
  }
};

// export const articleUser = async (req, res) => {
//   const user_id = Article.user_id
//   try {
//     const article = await Article.findAll({
//       where: { user_id: user_id.id },
//       include: [
//         {
//           model: User,
//           as: "user",
//         },
//       ],
//     });

//     if (!article.length) {
//       //Lanza error si el usuario no tiene artículos
//       return res.status(400).json({ msg: "No hay ningun articulo asignado" });
//     }

//     return res.status(200).json({ msg: "Articulos con user", data: article });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json("Internal Error Server");
//   }
// };
