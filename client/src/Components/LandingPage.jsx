import React from 'react';
import tierra from '../Media/tierra.m4v';
import '../Css/Landing.css'
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div className='containerLanding' data-testid='title'>
            <video className='video' src={tierra} autoPlay loop muted />
            <h1>Hola Mundo</h1>
            <Link to={'/home'}>
                <button className='landingButton'>Ingresar</button>
            </Link>
        </div>
    )
}