import jwt from "jsonwebtoken";


////Vamos a verificar si esta regsitrado luego de darle el token
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userLogueado = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Token Innvalido" });
  }
};