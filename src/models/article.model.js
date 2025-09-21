import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.model.js";

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
  }
  
},{
  paranoid:true
});

User.hasMany(Article, {
  foreignKey: "user_id",
  as: "articles",
    onDelete: "CASCADE",
});

Article.belongsTo(User, {
  foreignKey: "user_id",
  as: "user", 
});