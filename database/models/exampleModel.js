'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const userInit = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};

module.exports = userInit(connection, DataTypes)