
const initialState = {
    countries:[],
    allCountries: [],
    detail:{}
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries:action.payload,
                allCountries: action.payload
            }
        
        case 'FILTER_BY_CONTINENTE':
            const allCountries=state.allCountries
            const continenteFiltro= action.payload === 'All' ? allCountries : allCountries.filter(c =>c.continente === action.payload)
            return{
                ...state,
                countries: continenteFiltro
            }

        case 'ORDER_BY_NAME':
            const orderName = action.payload === 'Asc'?
            state.countries.sort(function(a,b){
                if(a.nombre > b.nombre){
                    return 1;
                }
                if(a.nombre < b.nombre){
                    return -1;
                }
                return 0
                }):
                state.countries.sort(function(a,b){
                    if(a.nombre > b.nombre){
                        return -1;
                    }
                    if(a.nombre < b.nombre){
                        return 1;
                    }
                    return 0
                })
                return {
                    ...state,
                    countries:orderName
                }
        case 'ORDER_BY_POBLACION':
            const orderPob=action.payload === 'Mayor'?
            state.countries.sort((a,b) => b.poblacion-a.poblacion):
            state.countries.sort((a,b) => a.poblacion-b.poblacion)
                return { 
                    ...state,
                    countries:orderPob
                        }
        
        case 'GET_NAME_COUNTRIES':
            return{
                ...state,
                countries:action.payload
            }
        
        case 'POST_ACTIVITY':
            return {
                ...state
            }

        case 'GET_DETAIL':
            return {
                ...state,
                    detail:action.payload
            }

        default:
            return state;
    }
}

