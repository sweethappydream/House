const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    name: { type: DataTypes.STRING, allowNull: false },
    picture: { type: DataTypes.STRING, allowNull: false },
  };
  const House = sequelize.define("House", attributes);

  return House;
}
