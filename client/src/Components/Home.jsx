import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Pagination from './Pagination';
import CountryCard from './CountryCard';
import Filter from './Filter';
import CountryDetail from './CountryDetail';
import NavBar from './NavBar';
import ActivityCreate from './ActivityCreate';

export default function Home() {
    const countries = useSelector((state) => state.countries);
    const [countrySelected, setCountrySelected] = useState(null);
    const [activitySeleceted, setActivitySelected] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfFirstCountry = (currentPage - 1) * 10;
    const currentCountries = countries.slice(
        (indexOfFirstCountry === 0 ? 1 : indexOfFirstCountry) - 1,
        indexOfFirstCountry + 10 - 1,
    );

    return (
        <>
            <div>
                <NavBar />

                <Filter
                    handleChangeCurrentPage={setCurrentPage}
                    handleActivitySelected={setActivitySelected} />

                <div className='grid'>
                    {currentCountries?.map((c) => (
                        <CountryCard
                            handleChangeCountrySelected={() => setCountrySelected(c)}
                            nombre={c.nombre}
                            bandera={c.bandera}
                            continente={c.continente}
                            key={c.ID}
                        />
                    ))}
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
    )
};
