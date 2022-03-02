const initialState = {
    countries: [],
    allCountries: [],
    detail: {},
    activities: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload,
            };

        case 'FILTER_BY_CONTINENTE':
            const allCountries = state.allCountries
            const continenteFiltro = action.payload === 'All' ? allCountries : allCountries.filter(c => c.continente === action.payload)
            return {
                ...state,
                countries: continenteFiltro
            };

        case 'ORDER_BY_NAME':
            const orderName = action.payload === 'Asc' ?
                state.countries.slice().sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (a.nombre < b.nombre) {
                        return -1;
                    }
                    return 0
                }) :
                state.countries.slice().sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (a.nombre < b.nombre) {
                        return 1;
                    }
                    return 0
                });

            return {
                ...state,
                countries: orderName
            };

        case 'ORDER_BY_POBLACION':
            const orderPob = action.payload === 'Mayor' ?
                state.countries.slice().sort((a, b) => b.poblacion - a.poblacion) :
                state.countries.slice().sort((a, b) => a.poblacion - b.poblacion)
            return {
                ...state,
                countries: orderPob
            };

        case 'GET_NAME_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            };

        case 'POST_ACTIVITY':
            return {
                ...state,
            };

        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            };

        case 'FILTER_BY_ACTIVITIES':
            let names = action.payload.split(',')
            const country = state.allCountries;
            const countryActivity = country.filter(c => names.includes(c.nombre));
            return {
                ...state,
                countries: countryActivity
            };

        default:
            return state;
    };
};

