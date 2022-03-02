import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getActivities, getCountries } from '../Actions';
import '../Css/ActivityCreate.css'

function validate(input) {
    let errors = {};
    console.log(errors);
    if (!input.nombre) {
        errors.nombre = 'El nombre es requerido.';
    }else if (input.nombre.length > 30){
        errors.nombre = 'no debe exceder las 30 letras';
        }else if (!/^[A-Z ]+$/i.test(input.nombre)){
            errors.nombre = 'Solo pueden ser letras';
    };
    if (!input.dificultad) {
        errors.dificultad = 'Debe especificar dificultad.';
    };
    if (!input.duracion) {
        errors.duracion = 'Debe especificar la duración.';
    };
    if (!input.temporada) {
        errors.temporada = 'Debe seleccionar la temporada.'
    };
    if (input.pais.length <= 0) {
        errors.pais = 'Debe seleccionar al menos 1 pais.'
    };
    return errors;
};

export default function ActivityCreate({ close }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const countries = useSelector((state) => state.countries);
    const temporada = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
    const [input, setInput] = useState({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        pais: [],
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        })); 
    };

    function handleInputSelectTemp(e) {
        setInput({
            ...input,
            temporada: e.target.value
        });
        setErrors(validate({
            ...input,
            temporada: e.target.value
        }));
    };

    function handleSelectCountry(e) {
        console.log(input.pais)
        setInput({
            ...input,
            pais: [...input.pais, e.target.value]
        });
        if (input.pais.length < 1){
            setErrors(validate({
                ...input,
                pais: [e.target.value],
            }));
        };
    };

    function handleDeletePais(p) {
        setInput({
            ...input,
            pais: input.pais.filter(pa => pa !== p)
        });

    };

    function handleSubmit(e) {
        e.preventDefault();
        if(!input.nombre || !input.dificultad || !input.duracion || !input.temporada || input.pais.length < 1 ){
            alert('¡Algo faltó! Debes llenar todos los campos.');
        }else {
            dispatch(postActivity(input));
            alert('¡Felicidades! Actividad creada con exito');
            dispatch(getActivities());
            setInput({
                nombre: '',
                dificultad: '',
                duracion: '',
                temporada: '',
                pais: []
            });
            dispatch(getActivities());
            dispatch(getCountries());
        };
    };

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
                        className='placeHolder' />
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
                        className='placeHolder' /><label>hora(s)</label>
                    {errors.duracion && (<p className='alertError'>{errors.duracion}</p>)}
                </div>

                <div>
                    <label>Temporada: </label>
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
                        <select
                        name='pais'
                        onChange={(e) => handleSelectCountry(e)} defaultValue=''>
                        <option value= ''>Seleccionar Pais</option>
                        {countries?.map((c) => (
                            <option
                            value={c.nombre} key={c.id}
                            >{c.nombre}</option>
                        ))}
                    </select>
                    {errors.pais && (<p className='alertError'>{errors.pais}</p>)}
                    </div>

                    <div className='countriesContainer'>
                        {input.pais.map(p =>
                            <div className='countryContainer'> 
                            <p>{p}</p>
                            <button
                            onClick={() => handleDeletePais(p)}
                            className='deleteCountryBtn'
                            >x</button>
                            </div>
                            )}
                            
                    </div>
                <button
                    type='Submit'
                    className='createBtn'
                >Crear</button>
            </form>
            
            <button
                className='closeButon'
                onClick={close}
            >x</button>
        </div>
    )
}
