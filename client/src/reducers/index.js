import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ThreadsReducer from './reducer_threads';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    threads: ThreadsReducer,
    form: formReducer
});

export default rootReducer;