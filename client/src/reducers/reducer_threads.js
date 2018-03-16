import { FETCH_THREADS } from "../actions";
import _ from 'lodash';

export default function( state = {}, action ) {
    switch(action.type) {
        case FETCH_THREADS:
            return _.mapKeys(action.payload.data, 'cat_id');
        default:
            return state;
    }
}