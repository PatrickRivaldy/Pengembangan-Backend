const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Siswa = sequelize.define('Siswa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nisn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    alamat: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'siswa',
    timestamps: false
});

module.exports = Siswa;