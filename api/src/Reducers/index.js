import { addActivity } from "../Actions";

const initialState = [];

const activities = (state = initialState, action)=>{
    switch(action.type){
        case 'AddActivity':
            return [...state,
                    action.payload
                ];
        default:
            return state;
    }
}

module.exports={
    activities
}