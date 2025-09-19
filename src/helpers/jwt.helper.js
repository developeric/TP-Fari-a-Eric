import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const token = jwt.sign(
    {
      //Al user que le vamos a asignar el token
      id: user.id,
      first_name: user.profile.first_name,
      last_name: user.profile.last_name,
      //segun el rol que tenga, le vamos a permitir o no realizar X accion
      role: user.role,
    },
    //si tenemos la firma de manera local podriamos autorizar que realice X accion
    process.env.JWT_SECRET,
    {
      expiresIn:"1h"
    }
  );
  //retornamos la function
  return token;
};
