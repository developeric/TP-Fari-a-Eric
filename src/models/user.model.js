import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { type } from "os";

export const User = sequelize.define("UserModel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(20),
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  password:{
    type:DataTypes.STRING(255)
  }
});
