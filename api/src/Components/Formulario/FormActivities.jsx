import React from "react";
import { useState } from 'react';
import { connect } from "../../routes/Activities.route";

export function validate(input){
    let errors={};
    if(!input.nombre){
        errors.nombre='Nombre es requerido';
    }
    if(!input.dificultad){
        errors.dificultad = 'Debe especificar dificultad';
    }
    if(!input.duracion){
        errors.duracion = 'Debe especificar la duración';
    }
    if(!input.temporada){
        errors.temporada = 'Debe seleccionar la temporada;'
    }
    return errors;
}


export default function FormActivity(){
const [input, setInput] =useState({
    nombre:'',
    dificultad:'',
    duracion:'',
    temporada:''
})
const[errors, setErrors]=useState({})

const handleSubmit = function (e){
    e.preventDefault();
    alert('La activiad se ha creado con exito')
}

const handleInputChange = function(e){ 
    setInput({
        ...input,
        [e.target.name]:e.target.value
    });
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
}

return(
    <form onSubmit ={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input className={errors.nombre}
            type='text'
            name='nombre'
            onChange={handleInputChange}
            value={input.nombre}/>
            {errors.nombre && (<p>{errors.nombre}</p>)}
        </div>

        <div>
            <label>Dificultad:</label>
            <input className={errors.dificultad}
            type='number'
            name='dificultad'
            min='1'
            max='5'
            onChange={handleInputChange}
            value={input.dificultad}/>
            {errors.dificultad && (<p>{errors.dificultad}</p>)}
        </div>

        <div>
            <label>Duración:</label>
            <input className={errors.duracion}
            type='number'
            name='duracion'
            min='1'
            max='10'
            onChange={handleInputChange}
            value={input.duracion}/>
            {errors.duracion && (<p>{errors.duracion}</p>)}
        </div>

        <div>
            <label>Temporada:</label>
            <select name='temporada' onChange={handleInputChange} defaultValue=''>
                <option value=''>---</option>
                <option value={input.temporada}>Primavera</option>
                <option value={input.temporada}>Verano</option>
                <option value={input.temporada}>Otoño</option>
                <option value={input.temporada}>Invierno</option>
            </select>
        </div>

        <input type='submit' value='Submit'/>

    </form>
    )
};

export default connect(null, {})(addActivity)