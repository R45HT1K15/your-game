'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, SuperTopic }) {
      this.hasMany(Question, { foreignKey: 'topic_id' })
      this.belongsTo(SuperTopic, { foreignKey: 'id' })
    }
  }
  Topic.init({
    name: DataTypes.STRING,
    tema_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};