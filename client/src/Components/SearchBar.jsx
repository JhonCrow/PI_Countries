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
    }

    function handleSubmit() {
        dispatch(getNameCountries(name));
        setName('');
    }

    return (
        <div className="SearchBar">
            <input
                type='text'
                placeholder='Buscar...'
                onChange={e => handleInputChange(e)}
            />
            <div className="searchButton" type='submit' onClick={e => handleSubmit(e)}>
                <img src="https://cdn-icons.flaticon.com/png/512/2311/premium/2311526.png?token=exp=1645669012~hmac=cde97592f1083c8f8b71ee12741cbac2" alt="Not found" />
            </div>
        </div>
    )
}
