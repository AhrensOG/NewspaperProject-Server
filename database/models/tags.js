'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('..');

const tagsInit = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tags.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tags',
  });
  return Tags;
};

module.exports = tagsInit(connection, DataTypes)