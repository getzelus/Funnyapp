import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {movieReducer} from './movieSlice';
import {favReducer} from './favSlice';
import {baseReducer} from './baseSlice';


const rootReducer = combineReducers({
    movie: movieReducer,
    fav: favReducer,
    base: baseReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;


  