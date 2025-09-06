import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Article = sequelize.define(
  "ArticleModel", {
  title: {
    type: DataTypes.STRING(200),
  },
  content: {
    type: DataTypes.TEXT,
  },
  excerpt: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM(`published`, `archived`),
    defaultValue: "published",
  },
  
});
