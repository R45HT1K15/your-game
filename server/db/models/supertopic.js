'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperTopic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stat, Topic }) {
      this.hasMany(Stat, { foreignKey: 'tema_id' })
      this.hasMany(Topic, { foreignKey: 'tema_id' })
    }
  }
  SuperTopic.init({
    tema: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuperTopic',
  });
  return SuperTopic;
};