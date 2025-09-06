import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Article } from "./article.model.js";
import { Tag } from "./tag.model.js";

//tabla intermedia
export const ArticleTag = sequelize.define("ArticleTag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

ArticleTag.belongsTo(Article, { foreignKey: "article_id" });
ArticleTag.belongsTo(Tag, { foreignKey: "tag_id" });

Article.belongsToMany(Tag, {
  through: ArticleTag,
  foreignKey: "article_id",
  as: "tag",
});

Tag.belongsToMany(Article, {
  through: ArticleTag,
  foreignKey: "tag_id",
  as: "article",
});