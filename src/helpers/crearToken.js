import jwt from "jsonwebtoken";
import dotenv from "dotenv";
//
dotenv.config();
//
export const crearToken = (payload) => {
  const Token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return Token;
};
