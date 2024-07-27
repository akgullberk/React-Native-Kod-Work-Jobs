import { ADD_FAVORITE, REMOVE_FAVORITE } from './action';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const isAlreadyFavorite = state.favorites.some(job => job.id === action.payload.id);

      if (isAlreadyFavorite) {
        console.warn('Already favorite');
        return state;
      }

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

export default reducer;
