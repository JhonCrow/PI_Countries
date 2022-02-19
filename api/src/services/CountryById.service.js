const { Country, Activity } = require('../db')

const CountryByIdService = async (id) => {

    try {
        const getCountry = await Country.findByPk(id);

        if (!getCountry) {
            console.log('El Pais no fue encontrado');
            throw new Error( 'El Pais no fue encontrado');
        };
        return getCountry;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = { CountryByIdService }