const { sequelize, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dificultad: {
        type: DataTypes.INTEGER
    },
    duracion: {
        type: DataTypes.INTEGER
    },
    temporada: {
        type: DataTypes.ENUM('Primavera', 'Verano', 'Otoño', 'Invierno')
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});
};