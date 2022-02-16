const axios = require('axios');
const { Country } = require('../db')


const getCountries = async() => {
    const countriesDB= await axios.get('https://restcountries.com/v3/all');
    try {
        countriesDB.data.forEach(async (c) => {
        await Country.findOrCreate({where: {
            ID: c.cca3,
             nombre: c.name.common,
            bandera: c.flags[1],//es una Url
            continente: c.region,
            capital: c.capital ? c.capital[0]:"no hay capital",
          //  subregion: c.subregion,
            area: c.area,
            poblacion: c.population 
            }})              
        });
        
        console.log('Datos cargados')
    } catch (e) {
        console.log(e)
    }
}

/* const getCountryID = async (idPais)=>{
    const exist = await Country.findByPk(idPais)
    if(exist){
            console.log(exist)
            return exist;
        }else{
           console.log('Pais no encontrado')
        }
        
} */

module.exports={
    getCountries,
    //getCountryID
}

/* 
const exist = await Country.findByPk('COL');
if(!exist){
        const countriesDB= await axios.get('https://restcountries.com/v3/all');
        try {
            countriesDB.data.forEach(async (c) => {
            await Country.findOrCreate({where: {
                ID: c.cca3,
                 nombre: c.name.common,
                bandera: c.flags[1],//es una Url
                continente: c.region,
                capital: c.capital ? c.capital[0]:"no hay capital",
                subregion: c.subregion,
                area: c.area,
                poblacion: c.population 
                }})              
            });
            
            console.log('Datos cargados')
        } catch (e) {
            console.log(e)
        }
    } 






*/