export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (job) => ({
    type: ADD_FAV,
    payload: job,
});

export const removeFav = (job) => ({
    type: REMOVE_FAV,
    payload: job,
});