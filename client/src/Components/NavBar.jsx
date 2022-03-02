import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavBar.css';
import SearchBar from './SearchBar';

export default function NavBar({ handleActivitySelected}) {
    return (
        <header className='navbar'>
            <div>
                <a href='/home'> <img src="https://www.gifsanimados.org/data/media/1667/bola-del-mundo-imagen-animada-0014.gif" border="0" alt="bola-del-mundo-imagen-animada-0014" width="70" height="50" /></a>
            </div>

            <Link to={'/home'}>
            <button className='cleanFilterBtn' onClick={'location.reload()'}>Limpiar filtros</button>
            </Link>

            <div>
                <h1>Estos son los paises del mundo</h1>
            </div>

            <div>
            <button className='activityCreateBtn' onClick={handleActivitySelected}>Crear actividad</button>
            </div>

            <div>
                <SearchBar />
            </div>
        </header>
    );
};