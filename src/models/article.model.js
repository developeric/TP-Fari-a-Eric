import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.model.js";

export const Article = sequelize.define("Article", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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

Article.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Article, { foreignKey: "user_id" });
