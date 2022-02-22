 import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../Actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)  
}

function handleSubmit(e){
    dispatch(getNameCountries(name))
}

return(
        <div>
            <input
            type= 'text'
            placeholder = 'Buscar...'
            onChange={ e => handleInputChange(e)}
            />
            <button type='submit' onClick={ e => handleSubmit(e)}>Buscar</button>
        </div>


)



}