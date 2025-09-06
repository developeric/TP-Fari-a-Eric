import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const Tag = sequelize.define("TagModel", {
  name: {
    type: DataTypes.STRING(30),
  },
});