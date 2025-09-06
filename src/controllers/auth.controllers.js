import { Model } from "sequelize";
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
    // await Profile.create({first_name,last_name,biography,avatar_url,birth_date,user_id: newUser.id})

    const hashedPassword = await hashPassword(password);
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
        include: { model: Profile, as:"profile" },
      }
    );

    const secureUser = {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        profile: newUser.profile
    }


    res.status(201).json(secureUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};
