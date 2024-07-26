// redux/store.js
import { createStore } from 'redux';
import favoritesReducer from './reducer';

const store = createStore(favoritesReducer);

export default store;
