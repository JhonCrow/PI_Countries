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

                Bandera={pais.bandera}
                <p>
                Continente={pais.continente}
                Capital={pais.capital}
                Subregion={pais.subregion}
                Area={pais.area}
                Poblacion={pais.poblacion}
                </p> 

                <div>
                Actividades={pais.activities?.map(a =>( a.nombre))}
                 </div>
    
            </div>
                

                    <Link to='/home'>
                        <button>Volver</button>
                    </Link>  

            
        </div>
    )
}