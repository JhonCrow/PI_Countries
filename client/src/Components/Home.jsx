import  { React } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../Actions'; 
import Filtros from './Filtros';
import Paginado from './Paginado';


export default function Home(){
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


    return (
        <div>
            <Filtros/>
            <Paginado/>     
        </div>
    )
};