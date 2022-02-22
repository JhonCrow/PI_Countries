import   React  from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, filterByContinente, orderByName, orderByPopulation  } from '../Actions'; 
import { Link } from 'react-router-dom'
import Paginado from './Paginado';
import Pais from './Pais';
import '../Css/Filtro.css'

export default function Filtros(){
    const dispatch = useDispatch();
    const allCountries= useSelector((state)=> state.countries)
    const [order, setOrder] = useState()
    const [currentPage, setCurrentPage] = useState(1) 
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry) 

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    function handleFiltroContinente(e){
        dispatch(filterByContinente(e.target.value))
    }

    function handleOrderName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleOrderPob(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }


    return(
        <div>
            <div className='filter'>
                <div className='opt'>
                    <label>Continente</label>
                        <select onChange={ e => handleFiltroContinente(e) }>
                            <option value='All'>Todos</option>
                            <option value='Africa'>Africa</option>
                            <option value='Americas'>America</option>
                            <option value='Antarctic'>Antartica</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europa</option>
                            <option value='Oceania'>Oceania</option>
                        </select>
                </div>

                <div className='opt'>
                    <label>Orden Alfabetico</label>
                        <select onChange={ e => handleOrderName(e)} >
                            <option value='All'>Seleccionar</option>
                            <option value='Asc'>A-Z</option>
                            <option value='Desc'>Z-A</option>
                        </select>
                </div>
                
                <div className='opt'>
                    <label>Cantidad de población</label>
                        <select onChange ={ e => handleOrderPob(e)}>
                            <option value='Todo '>Seleccionar</option>
                            <option value='Mayor'>Mayor</option>
                            <option value='Menor'>Menor</option>
                        </select>
                </div> 

                <div className='opt'>
                    <label>Temporada</label>
                        <select>
                            <option value='All'>Seleccionar</option>
                            <option value='Primavera'>Primavera</option>
                            <option value='Verano'>Verano</option>
                            <option value='Otoño'>Otoño</option>
                            <option value='Invierno'>Invierno</option>
                        </select>
                </div>

                <div className='opt'>
                    <label>Actividades Creadas</label>
                        <select>
                            <option value='All'>Seleccionar</option>
                            <option value='Created'>Creadas</option>
                        </select>
                </div>
            </div>
        
            <div>
            <Paginado
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={paginado} 
                    />              
            </div>

            <div className='grid'>
            {currentCountries?.map((c)=>{
                        return (  
                                <Pais 
                                ID={c.ID}
                                nombre={c.nombre}
                                bandera={c.bandera}
                                continente={c.continente}
                                />   
                                
                        );
                    })}
            </div>
        </div>
    )
}