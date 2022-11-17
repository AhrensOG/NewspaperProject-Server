'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const userInit = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false,
  });
  return User;
};

module.exports = userInit(connection, DataTypes)