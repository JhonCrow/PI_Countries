import { useDispatch, useSelector } from 'react-redux';
import {
    filterByContinente, orderByName, orderByPopulation,
    filterByActivities,
} from '../Actions';
import '../Css/Filter.css';

export default function Filter({ handleChangeCurrentPage }) {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);

    function handleFilterContinent(e) {
        dispatch(filterByContinente(e.target.value));
        handleChangeCurrentPage(1);
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
        <div className='filterContainer' id='1'>
            <div className='opt'>
                <select onChange={e => handleFilterContinent(e)} id='1'>
                    <option value='Nada'>Continente</option>
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
                <select onChange={e => handleOrderName(e)} id='1'>
                    <option value='Nada'>Orden Alfabetico</option>
                    <option value='Asc'>A-Z</option>
                    <option value='Desc'>Z-A</option>
                </select>
            </div>

            <div className='opt'>
                <select onChange={e => handleOrderPob(e)} id='1'>
                    <option value='Nada'>Cantidad de población</option>
                    <option value='Mayor'>Mayor</option>
                    <option value='Menor'>Menor</option>
                </select>
            </div>

            <div className='opt'>
                <select onChange={e => handleFilterByActiviy(e)} id='1'>
                    <option value='Nada'>Actividades Creadas</option>
                    {activities?.map((a) => (
                        <option
                            value={a.countries.map(c => c.nombre)} key={a.id}
                        >{a.nombre}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};