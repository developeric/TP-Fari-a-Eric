import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Article } from "./article.model.js";

export const ArticleTag = sequelize.define("ArticleTag",{
    id:{
        type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true
    },
})

ArticleTag.belongsTo(Article,{foreignKey:"article_id"})
ArticleTag.belongsTo(Tag,{foreignKey:"tag_id"})

ArticleTag.hasMany(Article,{foreignKey:"article_id"})
ArticleTag.hasMany(Tag,{foreignKey:"tag_id"})