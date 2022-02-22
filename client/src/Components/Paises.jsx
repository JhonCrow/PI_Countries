import React from 'react';
import { useEffect } from 'react';
import { Link, useParams }  from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Actions/index.js';


export default function DetailPais(props){
    const dispatch = useDispatch()
    const {id} = useParams()
    

    useEffect(()=>{
        dispatch(getDetail(id));
    },[dispatch])

    const pais = useSelector((state)=> state.detail);
    
    return(
        <div>
                
            <div>
                <h2>{pais.nombre}</h2>

                <img src={pais.bandera} alt='not found'/>

                <h3>Continente: {pais.continente}</h3>
                <h3>Capital: {pais.capital}</h3>
                <h3>Subregion: {pais.subregion}</h3>
                <h3>Area: {pais.area}</h3>
                <h3>Población:{pais.poblacion}</h3>          

                <div>
                    <h4>
                    Actividades
                    {pais.activities?.map(a =>(
                        <div>
                        <h5>Nombre: {a.nombre}</h5>
                        <h5>Dificultad: {a.dificultad}</h5>
                        <h5>Duración: {a.duracion}</h5>
                        <h5>Temporada: {a.temporada}</h5>
                        </div>
                    
                    ))}
                    </h4>
               
                 </div>
    
            </div>
                

                    <Link to='/home'>
                        <button>Volver</button>
                    </Link>  

            
        </div>
    )
}