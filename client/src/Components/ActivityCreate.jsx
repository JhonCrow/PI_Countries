import React, {useState, useEffect} from 'react';
import {Link, /*useHistory*/} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postActivity, getNameCountries, getCountries } from '../Actions';

function validate(input){
    let errors={};
    if(!input.nombre){
        errors.nombre='El nombre es requerido';
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
    if(!input.pais){
        errors.pais = 'Debe seleccionar al menos 1 pais;'
    }
    return errors;
}

export default function ActivityCreate(){
const dispatch = useDispatch();
//const history= useHistory();
const [name, setName] = useState('')
const[errors, setErrors]=useState({})

const temporada =['Primavera', 'Verano', 'Otoño', 'Invierno']

const [input, setInput] =useState({
    nombre:'',
    dificultad:'',
    duracion:'',
    temporada:[],
    pais:[]
})

useEffect(()=>{
    dispatch(getCountries( ))
}, [dispatch]) 

function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
    console.log(input)
}

function handleInputSelectTemp(e){
    setInput({
        ...input,
        temporada:e.target.value
    })
    setErrors(validate({
        ...input,
        temporada:e.target.value
    }))
    console.log(input)
}

function handleInputBarSearchChange(e){
    setName(e.target.value) 
}

function handlebarSearchSubmit(e){
    e.preventDefault();
    dispatch(getNameCountries(name)) 
    setInput({
        ...input,
            pais:[...input.pais, name]
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
}

function handleDeletePais(p){
    setInput({
        ...input,
            pais: input.pais.filter( pa => pa !== p )
    })
}

function handleSubmit(e){
    e.preventDefault();
    dispatch(postActivity(input))
    alert('La activiad se ha creado con exito')
    setInput({
        nombre:'',
        dificultad:'',
        duracion:'',
        temporada:[],
        pais:[]
    })
   // history.push('/home')
}


return(
    <div>
        <Link to='/home'><button>Volver</button></Link>
        <h1>Crea tu actividad</h1>

            <form onSubmit={ e => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input 
                    type='text' 
                    name='nombre'
                    value={input.nombre}
                    onChange={e => handleInputChange(e)}/>
                    {errors.nombre && (<p>{errors.nombre}</p>)}
                    
                </div>

                <div>
                    <label>Dificultad:</label>
                    <input 
                    type='number'
                    name='dificultad'
                    min='1'
                    max='5'
                    value={input.dificultad}
                    onChange={e => handleInputChange(e)}/>
                     {errors.dificultad && (<p>{errors.dificultad}</p>)}
                </div>
                
                <div>
                    <label>Duración:</label>
                    <input 
                    type='number'
                    name='duracion'
                    min='1'
                    max='10'
                    value={input.duracion}
                    onChange={e => handleInputChange(e)}/><label>horas</label>
                    {errors.duracion && (<p>{errors.duracion}</p>)}
                </div>

                <div>
                <label>Temporada</label>
                    <select 
                    name='temporada'
                    onChange={(e) =>handleInputSelectTemp(e)} defaultValue='' >
                    <option value=''>Seleccionar</option>
                        {temporada.map((t)=>(
                            <option value={t}>{t}</option>
                        ))}
                    </select>
                    {errors.temporada && (<p>{errors.temporada}</p>)}
                </div>

                <div>
                    <label>Pais:</label>
                    <input
                    type= 'text'
                    placeholder = 'Buscar...'
                    onChange={ e => handleInputBarSearchChange(e)}
                    />
                    <button type='submit' onClick={ e => handlebarSearchSubmit(e)}>Agregar</button>
                    {errors.pais && (<p>{errors.pais}</p>)}
                </div>

                <button type='Submit'>Crear</button>

            </form>   

            {input.pais.map( p =>
                    <div>
                        <p>{p}</p>
                        <button onClick={()=> handleDeletePais(p)}>x</button>
                    </div>)}

        </div>
    )

}

/* //estado
const paises = useSelector((state)=> state.countries);

useEffect(()=>{
    dispatch(getCountries( ))
}, [dispatch])

//metodo
 function handleInputSelectPais(e){
    setInput({
        ...input,
        pais:[...input.pais, e.target.value]
    })
    console.log(input)
} 

//renderizado
<div>
<label>Pais</label>
<select onChange={e => handleInputSelectPais(e)} defaultValue=''>
<option value=''>---</option>
    {paises.map((c)=>(
        <option value={c.nombre}>{c.nombre}</option>
    ))}
</select>

 <ul><li>{input.pais.map(p=> `${p},`)}</li></ul>

</div>  */