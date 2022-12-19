'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ User, IsCorrect }) {
      this.belongsToMany(User, { through: 'IsCorrect', foreignKey: 'question_id' })
      this.hasMany(IsCorrect, { foreignKey: 'question_id' })
    }
  }
  Question.init({
    topic_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};