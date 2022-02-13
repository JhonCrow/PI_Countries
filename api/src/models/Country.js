const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true
    },
    Bandera: {
     type: DataTypes.STRING,
      allowNull: false,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregión: {
      type: DataTypes.STRING,
    },
    Área: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Población: {
      type: DataTypes.INTEGER
    },
  });
};
