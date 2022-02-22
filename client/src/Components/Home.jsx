import  { React } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, filterByContinente, orderByName, orderByPopulation } from '../Actions'; 
import { Link } from 'react-router-dom'
import Pais from './Pais'
import Paginado from './Paginado';
import SearchBar from './SearchBar';
//import Paises from './Paises'


export default function Home(){
    const dispatch = useDispatch();
    const allCountries= useSelector((state)=> state.countries)
    const [order, setOrder] = useState()
    const [currentPage, setCurrentPage] = useState(1) 
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry) 

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

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

    

    return (
        <div>
            <h1>Estos son los paises del mundo</h1>
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

                <label>Orden Alfabetico</label>
                <select onChange={ e => handleOrderName(e)} >
                    <option value='All'>Seleccionar</option>
                    <option value='Asc'>A-Z</option>
                    <option value='Desc'>Z-A</option>
                </select>

                <label>Cantidad de población</label>
                <select onChange ={ e => handleOrderPob(e)}>
                    <option value='All'>Seleccionar</option>
                    <option value='Mayor'>Mayor</option>
                    <option value='Menor'>Menor</option>
                </select>

                <label>Temporada</label>
                <select>
                    <option value='All'>Seleccionar</option>
                    <option value='Primavera'>Primavera</option>
                    <option value='Verano'>Verano</option>
                    <option value='Otoño'>Otoño</option>
                    <option value='Invierno'>Invierno</option>
                </select>

                <label>Actividades Creadas</label>
                <select>
                    <option value='All'>Seleccionar</option>
                    <option value='Created'>Creadas</option>
                </select>

                <Paginado
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
                />

                <SearchBar/>

               
                {currentCountries?.map((c)=>{
                    return (  
                    <div>
                        <Link to={'/home/'+ c.ID}>
                            <Pais 
                            key={c.ID}
                            nombre={c.nombre}
                            bandera={c.bandera}
                            continente={c.continente}
                            />
                        </Link>                    
                    </div>  
                    );
                })}
        </div>
    )
};