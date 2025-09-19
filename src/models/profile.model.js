import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Profile = sequelize.define("ProfileModel", {
  first_name: {
    type: DataTypes.STRING(50),
  },
  last_name: {
    type: DataTypes.STRING(50),
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  avatar_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
})


