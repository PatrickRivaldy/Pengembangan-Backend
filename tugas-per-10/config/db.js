const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('presensi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    });

module.exports = sequelize;