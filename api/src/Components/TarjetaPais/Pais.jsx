import React from 'react';

export default function Pais(props){
    return (
        <div>
            <h2>{props.nombre}</h2>
            <div>
                <img src={props.bandera} alt='image not found'/>
            </div>
            <div>
                <h3>{props.continente}</h3>
            </div>
        </div>
    )
};