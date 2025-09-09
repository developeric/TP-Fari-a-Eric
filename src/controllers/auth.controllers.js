import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";
import { matchedData } from "express-validator";
import { hashPassword } from "../helpers/bcrypt.helper.js";


export const registerUser = async (req, res) => {
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
  } = matchedData(req);
  try {
    const hashedPassword = hashPassword(password);
    const newUser = await User.create(
      {
        username,
        email,
        password: hashedPassword,
        role,
        profile: {
          first_name,
          last_name,
          biography,
          avatar_url,
          birth_date,
        },
      },
      {
        include: { model: Profile, as: "profile" },
      }
    );

    const secureUser = {
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      profile: newUser.profile,
    };

    res.status(201).json(secureUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};

//LOGIN
export const Login = async(user)=>{
  const {username}= req.body
  const user = await User.findOne({
    where: {username}
  })

}
    //buscamos el User por su Username en la DB

  //generar JWT
  //declaramos token con los atributos del generateToken


  //envía el token

