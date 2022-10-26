const config = require('../config');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const db = {};

initialize();

function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config;
    // const connection = await mysql.createConnection({ host, port, user, password });
    // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });
    
    if(sequelize) {
        console.log("Connected to database!");
    } else {
        console.log("Database connection error!");
    }
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.House = require('./house.model')(sequelize);
    db.Amenity = require('./amenity.model')(sequelize);
    db.Unit = require('./unit.model')(sequelize);
    db.Unit_amenity = require('./unit_amenity.model')(sequelize);
    // sync all models with database
    sequelize.sync({ alter: true });
}

module.exports = db;