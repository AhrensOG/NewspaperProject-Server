'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const commentsInit = (sequelize, DataTypes) => {
  class Comments extends Model {}
  Comments.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};

module.exports = commentsInit(connection, DataTypes)