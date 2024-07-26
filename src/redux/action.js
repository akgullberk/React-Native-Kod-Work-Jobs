// redux/actions.js
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (job) => ({
  type: ADD_FAVORITE,
  payload: job,
});

export const removeFavorite = (jobId) => ({
  type: REMOVE_FAVORITE,
  payload: jobId,
});
