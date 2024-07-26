import { ADD_FAVORITE, REMOVE_FAVORITE } from './action';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(job => job.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
