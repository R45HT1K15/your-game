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
    static associate({ Stat, IsCorrect, Question }) {
      this.hasMany(Stat, { foreignKey: 'user_id' })
      this.hasMany(IsCorrect, { foreignKey: 'user_id' })
      this.belongsToMany(Question, { through: 'IsCorrect', foreignKey: 'user_id' })
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};