const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  },
);

module.exports = Blog;
