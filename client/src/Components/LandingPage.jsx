import React from 'react';
import { Link } from 'react-router-dom'

export default function LandingPage(){
    return(
        <div>
            <h1>Hola Mundo</h1>
            
            <a href="https://www.gifsanimados.org/cat-planeta-tierra-1160.htm"><img src="https://www.gifsanimados.org/data/media/1160/planeta-tierra-imagen-animada-0038.gif" border="0" alt="planeta-tierra-imagen-animada-0038" width="700" height="500" /></a>
            
            <div>
            <Link to ='/home'>
                <button>Ingresar</button>
            </Link>
            </div>
        </div>
    )
}