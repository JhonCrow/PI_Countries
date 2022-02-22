import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Pais.css'

export default function Pais({ nombre, bandera, continente, ID}){

    return (
        <div className='card_container'>
                <div  className='card'>
                    <div className='cover'>
                        <img className='bandera' src={bandera} alt='img not found' width="300" height="220"/>
                    </div>

                    <div className='description'>
                        <h2>{nombre}</h2>
                        <h3>{continente}</h3>
                        <Link to={'/home/'+ID}>
                        <button className='boton'>Detalle</button>
                     </Link>
                    </div>
            </div>
        </div>
    )
};

/* 
background-color:lightsteelblue; */