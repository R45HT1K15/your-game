'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, SuperTopic}) {
      this.belongsTo(SuperTopic, { foreignKey: 'id' })
      this.belongsTo(User, { foreignKey: 'id' })
    }
  }
  Stat.init({
    user_id: DataTypes.INTEGER,
    scores: DataTypes.INTEGER,
    tema_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stat',
  });
  return Stat;
};