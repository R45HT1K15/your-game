'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IsCorrect extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' })
      this.belongsTo(models.Question, { foreignKey: 'question_id'})
    }
  }
  IsCorrect.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'IsCorrect',
  });
  return IsCorrect;
};