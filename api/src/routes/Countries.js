const { Router }= require('express')
const axios = require('axios');
const {Country, Activity}= require('../db')
const router=Router()

//todas las solicitudes que lleguen a este archivo, es por que dicen:
//http://localhost:3001/countries

router.get('/', async(req, res, next )=>{
    try {
        //Pedido a la Api
        const pedidoApi = await axios.get('https://restcountries.com/v3/all');

        //Pedido a la BD
        //const pedidoBd = await Country.findAll({include : Activity })

        if(pedidoApi /*|| pedidoBd*/){
            let aux= pedidoApi.data?.map(c=>{
                return{
                    Nombre: c.name.common,
                    ID: c.cca3,
                    Bandera: c.flags[1],
                    Continente: c.region,
                    Capital:  c.capital ? c.capital[0]:"no hay capital",
                    Subregión: c.subregion,
                    Área: c.area,
                    Población: c.population,
                }
            })
            //let all= [...aux,...pedidoBd]
            res.send(aux)
        }else{
            res.json({message:'algo salio mal'})
        }
        
    } catch (error) {
        next(error)
    }
});










router.get('/{idPais}', (req, res)=>{
    
});

router.get('/?name="..":', (req, res)=>{
    
});

module.exports = router