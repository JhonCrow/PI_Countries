const { Activity, Country } = require('../db');

const postActivitiesService = async (nombre, duracion, dificultad, temporada, pais) => {

    try {
        if (!nombre && !duracion && !dificultad && !temporada && !pais) {
            console.log('La actividad no puede ser creada');
            throw new Error('La actividad no puede ser creada')
        }
        const newActivity = await Activity.create({
            nombre: nombre,
            duracion: duracion,
            dificultad: dificultad,
            temporada: temporada
        });
        const paisDB = await Country.findAll({
            where: {
                nombre: pais,
            }
        });
        newActivity.addCountry(paisDB);
        const actividades = await Activity.findAll();
        if (actividades) {
            return actividades;
        } else {
            return newActivity;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};
module.exports = { postActivitiesService }