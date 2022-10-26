const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    type: { type: DataTypes.STRING, allowNull: false },
    minOccupancy: { type: DataTypes.INTEGER, allowNull: false },
    maxOccupancy: { type: DataTypes.INTEGER, allowNull: false },
    sqft: { type: DataTypes.INTEGER, allowNull: false },
    house_id: { type: DataTypes.INTEGER, allowNull: false },
  };
  
  const Unit = sequelize.define("Unit", attributes);

  return Unit;
}
