'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const categoryInit = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'category',
    freezeTableName: true,
    paranoid: true,
    timestamps: false
  });
  return Category;
};

module.exports = categoryInit(connection, DataTypes)