import React from 'react'
import '../Css/Pagination.css';

export default function Pagination({ countriesPerPage, allCountries, paginado }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil((allCountries + 1) / countriesPerPage)  ; i++) {
        pageNumber.push(i)
    };

    return (
        <nav>
            <div className='paginado'>
                {pageNumber?.map(number => (
                    <button
                        className='but'
                        onClick={() => paginado(number)}
                        key={number}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </nav>
    )
}