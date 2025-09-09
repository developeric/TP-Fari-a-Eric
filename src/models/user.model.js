import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Profile } from "./profile.model.js";

export const User = sequelize.define(
  "UserModel",
  {
    username: {
      type: DataTypes.STRING(20),
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
  },
  {
    paranoid: true,
  }
)

Profile.belongsTo(User, { foreignKey: "user_id", as:"user" });
User.hasOne(Profile, { foreignKey: "user_id", as:"profile" });
