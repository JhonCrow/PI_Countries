import React from 'react';
import '../Css/CountryCard.css'

export default function CountryCard({
    nombre, bandera, continente, handleChangeCountrySelected,
}){

    return (
        <div className='card_container'>
                <div  className='card'>
                    <div className='cover'>
                        <img className='bandera' src={bandera} alt='img not found' width="300" height="220"/>
                    </div>

                    <div className='description'>
                        <h2>{nombre}</h2>
                        <h3>{continente}</h3>
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
