'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const postInit = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    subTitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    viewed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstPlain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    secondPlain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    thirdPlain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isAd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'post',
    freezeTableName: true,
    paranoid: true,
  });
  return Post;
};

module.exports = postInit(connection, DataTypes)