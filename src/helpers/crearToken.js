import jwt from "jsonwebtoken";

//genera un token con los datos ingresados (id,name,last_name,etc)
export const generateToken = (user) => {
  try {
    //crea,firma un token con los datos ingresados
    return jwt.sign(
      {
        id: user.id,
        first_name: user.profile.first_name,
        last_name: user.profile.last_name,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  } catch (error) {
    throw new Error("Error al generar el token: " + error.message);
  }
};

//aca se va a verificar el token generado previamente
export const verifyToken = (token) => {
  try {
    //verifica los datos del token junto con la firma,si coincide todo pasa sin problema
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    //en caso de q no coincida, saldrá un error
    throw new Error("Error verificando el token: " + error.message);
  }
};


