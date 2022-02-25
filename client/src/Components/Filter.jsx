import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterByContinente, orderByName, orderByPopulation,
    filterByActivities,
} from '../Actions';
import '../Css/Filter.css';

export default function Filter({ handleChangeCurrentPage, handleActivitySelected }) {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities)
    function handleFiltroContinente(e) {
        dispatch(filterByContinente(e.target.value));
    };

    function handleOrderName(e) {
        dispatch(orderByName(e.target.value));
        handleChangeCurrentPage(1);
    };

    function handleOrderPob(e) {
        dispatch(orderByPopulation(e.target.value));
        handleChangeCurrentPage(1);
    };

    function handleFilterByActiviy(e) {
        dispatch(filterByActivities(e.target.value));
        handleChangeCurrentPage(1);
    };

    return (
        <div className='filter'>
            <button>Limpiar filtros</button>
            <div className='opt'>
                <label>Continente</label>
                <select onChange={e => handleFiltroContinente(e)}>
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
                <select onChange={e => handleOrderName(e)} >
                    <option value='All'>---</option>
                    <option value='Asc'>A-Z</option>
                    <option value='Desc'>Z-A</option>
                </select>
            </div>

            <div className='opt'>
                <label>Cantidad de población</label>
                <select onChange={e => handleOrderPob(e)}>
                    <option value='Todo'>---</option>
                    <option value='Mayor'>Mayor</option>
                    <option value='Menor'>Menor</option>
                </select>
            </div>

            <div className='opt'>
                <label>Actividades Creadas</label>
                <select onChange={e => handleFilterByActiviy(e)}>
                    <option value='All'>---</option>
                    {activities?.map((a) => (
                        <option
                        value={a.countries.map(c => c.nombre)} key={a.id}
                        >{a.nombre}</option>
                    ))}
                </select>
            </div>

            <button onClick={handleActivitySelected}>crear actividad</button>

        </div>
    )
}