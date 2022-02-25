import React from 'react';
import '../Css/NavBar.css'
import SearchBar from './SearchBar';

export default function NavBar() {
    return (
        <header className='navbar'>
            <div>
                <a href='null'><img src="https://www.gifsanimados.org/data/media/1667/bola-del-mundo-imagen-animada-0014.gif" border="0" alt="bola-del-mundo-imagen-animada-0014" width="70" height="50" /></a>
            </div>

            <div>
                <h1>Estos son los paises del mundo</h1>
            </div>

            <div>
                <SearchBar />
            </div>
        </header>
    )
}