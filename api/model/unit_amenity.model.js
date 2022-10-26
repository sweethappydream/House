const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        unit_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        amenity_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    };
    
    return sequelize.define('Unit_amenity', attributes);
}