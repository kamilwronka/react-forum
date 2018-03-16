import { FETCH_CATEGORIES } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}