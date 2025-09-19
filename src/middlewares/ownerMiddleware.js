import { Article } from "../models/article.model.js";

export const Owner = async (req, res, next) => {
  const user = req.userLogueado;

  //article debe coincidir con el id que nosotros le demos
  //article debe pertenecer al id del req.userLogueado
  const article = await Article.findOne({
    where: { id: req.params.id, user_id: user.id },
  });

  if (!article) {
    return res
      .status(400)
      .json({ msg: "Usted no es el dueño de este Articulo" });
  }
};

export const OwnerOrAdmin = async (req, res, next) => {
  const user = req.userLogueado;
  try {
    if (user.role === "admin") {
      return next();
    }

    const article = await Article.findOne({
      where: { id: req.params.id, user_id: user.id },
    });
    if (!article) {
      return res.status(400).json({ msg: "Usted no tiene los permisos" });
    }

    next();
  } catch (error) {
    return res.status(400).json({ msg: "Algo ha salido mal" });
  }
};
