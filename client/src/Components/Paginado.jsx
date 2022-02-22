import React from 'react'
import '../Css/Paginado.css';

export default function Paginado({countriesPerPage,allCountries, paginado}){
    const pageNumber= [];

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumber.push(i)
    }
return (
    <nav>
        <ul className='paginado'>
            {pageNumber?.map(number=>(
                
                <button onClick={()=>paginado(number)}>{number}</button>
                
            ))}
        </ul>
    </nav>
)
}