
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartProducts } from './Reducers';

const reducer = combineReducers({
   cartProducts
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;