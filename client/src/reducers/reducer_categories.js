import { FETCH_CATEGORIES, FETCH_CATEGORY } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return _.mapKeys(action.payload.data, '_id');
        case FETCH_CATEGORY:
            console.log(action.payload.data[0]);
            return {...state, [action.payload.data[0]] : action.payload.data};
        default:
            return state;
    }
}