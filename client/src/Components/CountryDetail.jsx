import React from 'react';
import '../Css/CountryDetail.css';

export default function CountryDetail({ country, close }){
        return (
            <div className='containerCountryDetail' key={country.ID}>
                <div className='detail'>
                    <div className='flag'>
                        <img src={country.bandera} alt='not found' />
                    </div>

                    <div>
                        <h2>{country.nombre}</h2>
                        <h4>Continente: {country.continente}</h4>
                        <h4>Capital: {country.capital}</h4>
                        <h4>Subregion: {country.subregion}</h4>
                        <h4>Area: {country.area} km2</h4>
                        <h4>Población: {country.poblacion}</h4>
                    </div>

                    <div>
                        <h3>Actividades</h3>
                        {country.activities?.map(a => (
                            <div key={country.ID}>
                                <h5>{a.nombre}</h5>
                                <h5>Dificultad: {a.dificultad}</h5>
                                <h5>Duración: {a.duracion}</h5>
                                <h5>Temporada: {a.temporada}</h5>
                            </div>
                        ))}
                    </div>

                        <button
                        className='closeButon'
                        onClick={close}
                        >x</button>
                </div>
            </div>
        )
    }