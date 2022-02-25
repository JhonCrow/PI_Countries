import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getNameCountries, getCountries } from '../Actions';
import '../Css/ActivityCreate.css'

function validate(input) {
    let errors = {};
    if (!input.nombre && input.nombre !== Number ) {
        errors.nombre = 'El nombre es requerido';
    }
    if (!input.dificultad) {
        errors.dificultad = 'Debe especificar dificultad';
    }
    if (!input.duracion) {
        errors.duracion = 'Debe especificar la duración';
    }
    if (!input.temporada) {
        errors.temporada = 'Debe seleccionar la temporada;'
    }
    if (input.pais.length <= 0) {
        errors.pais = 'Debe seleccionar al menos 1 pais;'
    }
    return errors;
}

export default function ActivityCreate({ close }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const countries = useSelector((state) => state.countries)


    const temporada = ['Primavera', 'Verano', 'Otoño', 'Invierno']

    const [input, setInput] = useState({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: [],
        pais: []
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleInputSelectTemp(e) {
        setInput({
            ...input,
            temporada: e.target.value
        })
        setErrors(validate({
            ...input,
            temporada: e.target.value
        }))
        console.log(input)
    }

    function handlebarSearchSubmit(e) {
        e.preventDefault();
        const country = countries.find((country) => country.nombre === name );
        if(country){
            setInput({
                ...input,
                pais: [...input.pais, country.nombre]
            })
        }
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleDeletePais(p) {
        setInput({
            ...input,
            pais: input.pais.filter(pa => pa !== p)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input))
        alert('La activiad se ha creado con exito')
        setInput({
            nombre: '',
            dificultad: '',
            duracion: '',
            temporada: [],
            pais: []
        })
    }


    return (
        <div className='activityContainer'>
            <h1>Crea tu actividad</h1>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type='text'
                        name='nombre'
                        value={input.nombre}
                        onChange={e => handleInputChange(e)} 
                        className='placeHolder' />
                    {errors.nombre && (<p className='alertError'>{errors.nombre}</p>)}
                </div>

                <div>
                    <label>Dificultad: </label>
                    <input
                        type='number'
                        name='dificultad'
                        min='1'
                        max='5'
                        value={input.dificultad}
                        onChange={e => handleInputChange(e)} 
                        className='placeHolder'/>
                    {errors.dificultad && (<p className='alertError'>{errors.dificultad}</p>)}
                </div>

                <div>
                    <label>Duración: </label>
                    <input
                        type='number'
                        name='duracion'
                        min='1'
                        max='10'
                        value={input.duracion}
                        onChange={e => handleInputChange(e)} 
                        className='placeHolder'/><label>horas</label>
                    {errors.duracion && (<p className='alertError'>{errors.duracion}</p>)}
                </div>

                <div>
                    <label>Temporada </label>
                    <select
                        name='temporada'
                        onChange={(e) => handleInputSelectTemp(e)} defaultValue='' >
                        <option value=''>Seleccionar</option>
                        {temporada.map((t) => (
                            <option value={t}>{t}</option>
                        ))}
                    </select>
                    {errors.temporada && (<p className='alertError'>{errors.temporada}</p>)}
                </div>

                <div>
                    <label>Pais: </label>
                    <input
                        type='text'
                        placeholder='Buscar...'
                        onChange={e => setName(e.target.value)}
                        className='placeHolder'
                    />
                    <button
                    type='submit'
                    className='addBtn'
                    onClick={e => handlebarSearchSubmit(e)}>Agregar</button>
                    {errors.pais && (<p className='alertError'>{errors.pais}</p>)}
                </div>

                <button type='Submit' className='createBtn'>Crear</button>

            </form>
            
            <div className='countriesContainer'>
            {input.pais.map(p =>
                <div className='countryContainer'> <p>{p}</p><button
                    onClick={() => handleDeletePais(p)}
                    className='deleteCountryBtn'
                    >x</button>
                </div>)}
            </div>


                <button
                        className='closeButon'
                        onClick={close}
                        >x</button>

        </div>
    )
}
