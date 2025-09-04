import { User } from "../models/user.model.js";







export const createUser = async (req, res) => {
    const { username,email, password, role } = req.body;

  try {
    const user = User.create(req.body);
    if (user) {
      return res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json({ Message: "Internal Server Error en el CREATE" });
    console.log(error);
  }
};
