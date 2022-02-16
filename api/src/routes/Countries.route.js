const { Router }= require('express')
const axios = require('axios');
const {Country, Activity}= require('../db')
const router=Router()
//const { getCountries, getCountryID }=require('../Controlador/Countries.controller.js')

//todas las solicitudes que lleguen a este archivo, es por que dicen:
//http://localhost:3001/countries

const getApiInfo = async ()=>{
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(c=>{
        return {
            ID: c.cca3,
            nombre: c.name.common,
            bandera: c.flags[1],//es una Url
            continente: c.region,
            capital: c.capital ? c.capital[0]:'No tiene capital',
            subregion: c.subregion ? c.subregion : 'Polo sur',
            area: c.area,
            poblacion: c.population 
        };
    });
    return apiInfo;
};

const getDbInfo= async ()=>{
    return await Country.findAll({
        include:{
            model: Activity,
            attributes: ['nombre', 'dificultad', 'duracion', 'temporada' ],
            through:{
                attributes: []
            },
        }
    });
}

const getAllCountry = async ()=>{
    const apiInfo= await getApiInfo();
    const dbInfo= await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}


router.get('/countries', async (req, res)=>{
    const name= req.query.name;
    let countriesTotal = await getAllCountry();
    if(name){
        let countryName = await countriesTotal.filter(c => c.nombre.toLowerCase().includes(name.toLowerCase()))
        countryName.length?
        res.status(200).send(countryName):
        res.status(404).send('No esta el pais buscado')
    }else{
        res.status(200).send(countriesTotal)
    }
})





const getInfo = async ()=>{
    const countriesDB= await axios.get('https://restcountries.com/v3/all')
    countriesDB.data.forEach(async (c) => {
        await Country.findOrCreate({where: {
            ID: c.cca3,
            nombre: c.name.common,
            bandera: c.flags[1],//es una Url
            continente: c.region,
            capital: c.capital ? c.capital[0]:'No tiene capital',
            subregion: c.subregion ? c.subregion : 'Polo sur',
            area: c.area,
            poblacion: c.population 
            }})              
        });
        console.log('Datos cargados')
}






router.get('/countries', async (req, res, next)=>{
        const countriesDB= await axios.get('https://restcountries.com/v3/all');
        try {
            countriesDB.data.forEach(async (c) => {
            await Country.findOrCreate({where: {
                ID: c.cca3,
                nombre: c.name.common,
                bandera: c.flags[1],//es una Url
                continente: c.region,
                capital: c.capital ? c.capital[0]:'No tiene capital',
                subregion: c.subregion ? c.subregion : 'Polo sur',
                area: c.area,
                poblacion: c.population 
                }})              
            });
            console.log('Datos cargados')
        } catch (e) {
            console.log(e)
        }
    const paises = await Country.findAll({
        attributes: ['nombre', 'bandera']
    })
    console.log('Paises Mostrados')
    res.send(paises)
})
/*
router.get('/countries/:idPais', async (req, res, next )=>{
    const { idPais } = req.params;
    const id = await Country.findByPk(idPais)
    if(id){
        console.log(id)
        res.send(id)
        }else{
        console.log('El Pais no fue encontrado')
        res.json({msj:'El Pais no fue encontrado'}).status(404)
        } 
});

router.get('/countries/', async(req, res)=>{
    //const { name } = req.query;
    const pais = await Country.findAll({
        where:{
            nombre: req.query.name
        }
    })
    if(pais){
        console.log(pais)
        res.send(pais)
            }else{
            console.log('El Pais no fue localizado')
            res.json({msj:'El Pais no fue localizado'}).status(404)
            }
});
 */
module.exports = router

/* {
    [Op.iLike]:`%${name}%`//Busca palabras similares o que la contengan en la busqueda
        }  */