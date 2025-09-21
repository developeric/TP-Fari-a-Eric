//MW: verificar que sea un administrador

export const authAdmin = (req, res, next) => {
  const user = req.userLogueado;
  if (user.role !== "admin") {
    return res.status(403).json({ msg: "Usted no tiene los permisos" });
  }
  next();
};
