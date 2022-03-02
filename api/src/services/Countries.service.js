const { Country, Activity } = require('../db')
const { Op } = require("sequelize")
const axios = require('axios');

const getCountriesService = async (name) => {
    try {
        const countriesDB = await axios.get('https://restcountries.com/v3/all');
        countriesDB.data.forEach(async (c) => {
            await Country.findOrCreate({
                where: {
                    ID: c.cca3,
                    nombre: c.name.common,
                    bandera: c.flags[1],//es una Url
                    continente: c.region,
                    capital: c.capital ? c.capital[0] : 'No tiene capital',
                    subregion: c.subregion ? c.subregion : 'Polo sur',
                    area: c.area,
                    poblacion: c.population
                }
            });
        },
            console.log('Datos cargados')
        );
        if (!name) {
            const paises = await Country.findAll({
                include: [{
                    model: Activity,
                    through: {
                        attributes: [],
                    }
                }]
            });
            console.log('Paises Mostrados');
            return paises;

        } else if (name) {
            const getCountry = await Country.findAll({
                where: {
                    nombre: {
                        [Op.iLike]: `%${name}%`
                    }
                },include: [{
                    model: Activity,
                    through: {
                        attributes: [],
                    }
                }],
            });
            return getCountry;
        } else {
            console.log('El Pais no se encontro');
            throw new Error('El Pais no se encontro');
        };
    } 
    catch (error) {
        console.log(error);
        throw error;
    };
};
module.exports = { getCountriesService };