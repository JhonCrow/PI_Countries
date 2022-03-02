import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination';
import CountryCard from './CountryCard';
import Filter from './Filter';
import CountryDetail from './CountryDetail';
import NavBar from './NavBar';
import ActivityCreate from './ActivityCreate';
import { getCountries, getActivities } from '../Actions';

export default function Home() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [countrySelected, setCountrySelected] = useState(null);
    const [activitySeleceted, setActivitySelected] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfFirstCountry = (currentPage - 1) * 10;
    const currentCountries = countries.slice(
        (indexOfFirstCountry === 0 ? 1 : indexOfFirstCountry) - 1,
        indexOfFirstCountry + 10 - 1,
    );
    
    useEffect(() => dispatch(getCountries()), [dispatch]);
    useEffect(() => dispatch(getActivities()), [dispatch]);

    return (
        <>
            <div>
                <NavBar 
                    handleActivitySelected={setActivitySelected}/>

                <Filter
                    handleChangeCurrentPage={setCurrentPage}
                   />

                <div className='grid'>
                    {currentCountries.length ? currentCountries.map((c) => (
                        <CountryCard
                            handleChangeCountrySelected={() => setCountrySelected(c)}
                            nombre={c.nombre}
                            bandera={c.bandera}
                            continente={c.continente}
                            key={c.ID} />
                    )): <p className='loader'> </p> }
                </div>

                <Pagination
                    countriesPerPage={10}
                    allCountries={countries.length}
                    paginado={(pageNumber) => setCurrentPage(pageNumber)}
                />
            </div>

            {countrySelected && (
                <CountryDetail country={countrySelected} close={() => setCountrySelected(null)} />
            )}

            {activitySeleceted && (
                <ActivityCreate activity={activitySeleceted} close={() => setActivitySelected(null)} />
            )
            }
        </>
    );
};
