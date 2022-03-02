import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../Actions";
import '../Css/SearchBar.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e) {
        if(!name){
            alert('¡Oops! No escribiste nada para buscar.');
        };
        dispatch(getNameCountries(name))
        .then(response => {
            if(response.payload.length === 0) {
                alert('Lo siento pais no encontrado');
            };
        })
        .catch( error =>
            console.log(error)
        );
        setName('');
    };

    return (
        <div className="SearchBar">
            <input
                type='text'
                placeholder='Buscar...'
                onChange={e => handleInputChange(e)}
                value={name}
            />
            <div className="searchButton" type='submit' onClick={e => handleSubmit(e)}>
                <img src="https://cdn-icons.flaticon.com/png/512/2311/premium/2311526.png?token=exp=1645669012~hmac=cde97592f1083c8f8b71ee12741cbac2" alt="Not found" />
            </div>
        </div>
    );
};
