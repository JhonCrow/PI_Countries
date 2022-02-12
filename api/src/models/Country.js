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
    },
    Bandera: {
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
    Subregion: {
      type: DataTypes.STRING,
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Población: {
      type: DataTypes.INTEGER
    },
  });

  sequelize.define('activity', {
    ID: {
      type: DataTypes.INTEGER
    },
    Nombre: {
      type: DataTypes.STRING
    },
    Dificultad: {
      type: DataTypes.INTEGER
    },
    Duracion: {
      type: DataTypes.INTEGER
    },
    Temporada: {
      type: DataTypes.STRING
    },
  });
};
