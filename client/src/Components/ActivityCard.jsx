import React from 'react';


export default function ActivityCard({
    nombre, dificultad, duracion, temporada, paises
}){

    return (
        <div className='activity_container'>
                <div  className='card'>

                    <div className='description'>
                        <h2>{nombre}</h2>
                        <h3>{dificultad}</h3>
                        <h3>{duracion}</h3>
                        <h3>{temporada}</h3>
                        <h3>{copais}</h3>

                        <button
                            className='boton'
                            onClick={handleChangeCountrySelected}
                        >
                            Detalle
                        </button>
                    </div>
            </div>
        </div>
    )
};
