import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/NavBar.css'
import SearchBar from './SearchBar';

export default function NavBar(){


    return(
        <header className='navbar'>
            <div>
            <a href="https://www.gifsanimados.org/cat-bolas-del-mundo-1667.htm"><img src="https://www.gifsanimados.org/data/media/1667/bola-del-mundo-imagen-animada-0014.gif" border="0" alt="bola-del-mundo-imagen-animada-0014"width="70" height="50" /></a>
            </div>

            <div>
                <h1>Estos son los paises del mundo</h1> 
            </div>

            <nav className='list'>
                <NavLink exact to='/home' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/activities' activeClassName='active'>Crear Actividades</NavLink>
            </nav>
            <SearchBar/>


        </header>
    )
}