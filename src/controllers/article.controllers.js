import { Error } from "sequelize";
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
  const { id } = req.params;
  try {
    const articlebypk = await Article.findByPk(id);
    if (!articlebypk) {
      return res.status(404).json({ msg: "No Encontrado", data: null });
    }
    return res
      .status(200)
      .json({ msg: "Obtenido Correctamente", data: articlebypk });
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
  const{id}= req.params
  try {
    const article = await Article.destroy({ where: { id: req.params.id } });
    
    if (!article) {
      return res.status(404).json({ Message: "No se ha podido Borrar" });
    }
      return res.status(200).json({ Message: "Article Borrado Exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server en el Delete");
  }
};

//Articles with User
export const ArticlesWithUSer = async (req, res) => {
  try {
    const articles = await Article.findAll({
      attributes: ["id", "title", "content", "status"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username"], //atributos a nivel usuario
        },
      ],
    });
    return res.status(200).json({ msg: "Obtenidos", data: articles });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//GetByPKWithUser

// ● GET /api/articles/user/:id → Obtener artículo del usuario logueado por su id. (usuario
// autenticado)
export const getArticlesWithUserbyID = async (req, res) => {
  const { id } = req.params;
  try {
    const articlebypk = await Article.findByPk(id, {
      include: [
        // attributes: [] //atributos a nivel articulo
        {
          model: User,
          as: "user",
          attributes: ["id", "username"], //atributos a nivel usuario
        },
      ],
    });
    if (!articlebypk) {
      return res.status(404).json({ msg: "No Encontrado", data: null });
    }
    return res
      .status(200)
      .json({ msg: "Obtenido Correctamente", data: articlebypk });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ Message: "Internal Server Error en el GetByPK" });
  }
};
