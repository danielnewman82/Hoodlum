import { CHANGE_LOCATION } from "./ActionCreators";
import store from './store';

export function reducer(state, action) {
    switch (action.type) {
        case CHANGE_LOCATION : 
        return { ...state, location : action.text}
    
    default:
        return state;
    }
}

export default reducer