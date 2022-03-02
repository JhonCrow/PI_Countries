import axios from 'axios';

export function getCountries() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data,
        });
    };
};

/* export function getCountries() {
    return function (dispatch) {
        return fetch('http://localhost:3001/countries')
        .then(r => r.json())
        .then(json => {dispatch({type: 'GET_COUNTRIES', payload: json })});
    };
}; */

export function getActivities() {
    return async function (dispatch) {
        const getAct = await axios.get('http://localhost:3001/activities');
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: getAct.data,
        });
    };
};

export function getNameCountries(nombre) {
    return async function (dispatch) {
        console.log(nombre)
        var names = await axios.get('http://localhost:3001/countries?name=' + nombre);
        console.log(names.data)
        return dispatch({
            type: 'GET_NAME_COUNTRIES',
            payload: names.data,
        });
    };
};

export function getDetail(id) {
    return async function (dispatch) {
        var getId = await axios.get('http://localhost:3001/countries/' + id);
        return dispatch({
            type: 'GET_DETAIL',
            payload: getId.data,
        });
    };
};

export function postActivity(payload) {
    return async function () {
        const act = await axios.post('http://localhost:3001/activities', payload);
        return act;
    };
};

export function filterByContinente(continente) {
    return {
        type: 'FILTER_BY_CONTINENTE',
        payload: continente,
    };
};

export function orderByName(nombre) {
    return {
        type: 'ORDER_BY_NAME',
        payload: nombre,
    };
};

export function orderByPopulation(poblacion) {
    return {
        type: 'ORDER_BY_POBLACION',
        payload: poblacion,
    };
};

export function filterByActivities(payload) {
    console.log(payload)
    return {
        type: 'FILTER_BY_ACTIVITIES',
        payload,
    };
};