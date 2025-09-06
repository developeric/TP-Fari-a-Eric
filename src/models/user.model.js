import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Article } from "./article.model.js";

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
);

User.hasMany(Article, {
  foreignKey: "user_id",
  as: "articles",
});

Article.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  onDelete: "CASCADE",
});
