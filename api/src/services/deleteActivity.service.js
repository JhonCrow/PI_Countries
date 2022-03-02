const { Activity, Country } = require('../db');
const { Op } = require("sequelize");

const deleteActivityService = async (nombre) => {
    try {
        console.log(nombre)
        if (!nombre) {
            console.log('Actividad no encontrada');
            throw new Error('La actividad no puede ser encontrada');
        } else if (nombre) {
            await Activity.destroy({
                where: {
                    nombre: {
                        [Op.iLike]: `%${nombre}%`
                    },
                },
            });
        };
    }
    catch (error) {
        console.log(error);
        throw error;
    };
};
module.exports = { deleteActivityService };