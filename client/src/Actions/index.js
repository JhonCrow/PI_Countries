import axios from 'axios';

export function getCountries(){
    return async function(dispatch){ 
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_COUNTRIES', 
            payload: json.data
        })
    }
}

export function getNameCountries(nombre){
    return async function(dispatch){
        var names = await axios.get('http://localhost:3001/countries?name=' + nombre);
        return dispatch({
            type: 'GET_NAME_COUNTRIES',
            payload: names.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        var getId = await axios.get('http://localhost:3001/countries/'+ id);
        return dispatch({
            type: 'GET_DETAIL',
            payload: getId.data
        })
    }
}

export function postActivity(payload){
    return async function(){
        const act = await axios.post('http://localhost:3001/activities', payload);
        return act;
    }
}

export function filterByContinente(continente){
    return {
        type: 'FILTER_BY_CONTINENTE',
        payload: continente
    }
}

export function orderByName(nombre){
    return{
        type: 'ORDER_BY_NAME',
        payload: nombre
    }
}

export function orderByPopulation(poblacion){
    return{
        type: 'ORDER_BY_POBLACION',
        payload: poblacion
    }
}


