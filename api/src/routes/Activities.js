const { Router }= require('express')
const { Country, Activity } = require('../db')

const router=Router()


//todas las solicitudes que lleguen a este archivo, es por que dicen:
//http://localhost:3001/activities

router.get('/mostrar', async(req, res, next)=>{
    try {
   

        //Pedido a la BD
        const pedidoBd = await Activity.findAll()

        if(pedidoBd ){
            let aux= pedidoBd?.map(a=>{
                return{
                    Nombre: a.Nombre,
                    Dificultad: a.Dificultad,
                    Duración: a.Duración,
                    Temporada:a.Temporada
                }
            })
            res.send(aux)
        }else{
            res.json({message:'algo salio mal'})
        }
        
    } catch (error) {
        next(error)
    }
})

router.post('/create', async (req, res)=>{
    const {actividad}= req.body;
    if(actividad){
        try {
            
            var nuevo = await Activity.create(actividad)
            if(nuevo) res.json({message: 'Creado correctamente', data: nuevo})
            else res.json({message: 'No se pudo crear el personaje'})
//hacer las relaciones con los Countries

        } catch (error) {
            res.send(error)
        }
    }
});

module.exports = router