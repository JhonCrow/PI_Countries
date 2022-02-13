const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },
    Nombre: {
        type: DataTypes.STRING
    },
    Dificultad: {
        type: DataTypes.INTEGER
    },
    Duración: {
        type: DataTypes.INTEGER
    },
    Temporada: {
        type: DataTypes.STRING
    }
});
};