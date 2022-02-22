import React from 'react';
import '../Css/Pais.css'

export default function Pais({ nombre, bandera, continente}){
    console.log(nombre)
    return (
        <div  className='pais'>
             <div>
                <h2>{continente}</h2>
            </div>

            <div>
                <img className='bandera' src={bandera} alt='img not found'/>
            </div>

            <div>
                <h3>{nombre}</h3>
            </div>
        </div>
    )
};