'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id:DataTypes.INTEGER,
    registered:DataTypes.INTEGER,
    password:DataTypes.STRING,
    isActive:DataTypes.INTEGER,
    createAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};