import { comparePassword, hashPassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/crearToken.js";
import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";

//creamos una constante con todos los datos del usuario.
export const Register = async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    first_name,
    last_name,
    biography,
    avatar_url,
    birth_date,
  } = req.body;

  try {
    //la password nuestra se va a hashear
    const passwordHasheada = await hashPassword(password);

    //creamos un User
    const newUser = await User.create({
      username: username,
      email: email,
      password: passwordHasheada,
      role: role,
    });

    //le asignamos un Profile
    await Profile.create({
      first_name: first_name,
      last_name: last_name,
      biography: biography,
      avatar_url: avatar_url,
      birth_date: birth_date,
      user_id: newUser.id,
    });

    return res.status(201).json({ Message: "Usuario Creado Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server Register");
  }
};

//buscamos el user en la BD por su username
export const Login = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({
      where: { username: username },
      //incluímos su profile previamente asignado
      include: [
        {
          model: Profile,
          as: "profile",
        },
      ],
    });

    //comparamos las password ingresada y la existente en la BD
    const samePassword = await comparePassword(password, user.password);

    if (!samePassword || !user) {
      return res
        .status(404)
        .json({ Message: "Ha ingresado mal el User o la Password" });
    }
    //Se coloca un token para el user del Login
    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });

    return res.status(200).json({ Message: "Logueado Correctamente" });
  } catch (error) {
    return res.status(500).json("Internal Server Error Login");
  }
};
