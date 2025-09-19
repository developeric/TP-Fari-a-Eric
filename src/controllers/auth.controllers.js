import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";
import { comparePassword, hashPassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
// import bcrypt from "bcrypt"

//Register
export const Register = async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    first_name,
    last_name,
    biography,
    birth_date,
  } = req.body;
  try {
    const hashedpassword = await hashPassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedpassword,
      role,
    });

    await Profile.create({
      first_name,
      last_name,
      biography,
      birth_date,
      user_id: user.id,
    });
    //Si se ha ingresado mal algun dato
    if (!user) {
      return res
        .status(400)
        .json({ msg: "No se ha creado el Usuario", data: null });
    }
    //Creado Correctamente
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//Login
export const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username: username }, include:[{model:Profile, as: "profile"}] });

    if (!user) {
      return res
        .status(404)
        .json({ msg: "No se ha encontrado el User", data: null });
    }

    const samePassword = await comparePassword(password, user.password);
    if (!samePassword) {
      return res
        .status(400)
        .json({ msg: "Ha ingresado mal algún dato", data: null });
    }

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true, // No accesible desde JavaScript (previene XSS)
      maxAge: 3600000, // Tiempo de vida en milisegundos
    });

    return res.status(200).json({ ok: true, msg: "Logueado Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//Al cerrar sesion se borran las cookies
export const Logout = async (req, res) => {
  res.clearCookie("token");
  return res.json({ msg: "Logout Exítoso" });
};

export const profile = (req, res) => {
  const user = req.userLogueado;
  console.log(user)
  try {
    return res.json({
      user: {
        id: user.id,
        first_name: user.profile.first_name,
        last_name: user.profile.last_name,
      },
    });
  } catch (error) {
    return res.status(400).json({ msg: "No tiene los permisos" });
  }
};

// MODELO DE PRUEBA

// {
// 	"username":"Eric",
// 	"email":"eric1@gmail.com",
// 	"password":"EricAndres123",
// 	"first_name":"FirstName1",
// 	"last_name":"LastName1",
// 	"biography":"Bio123",
// 	"avatar_url":"http://localhost:4000",
// 	"birth_date":"2007-02-18"
// }
