const initialState = {
    favourites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        case "REMOVE_FAV":
            return {
                ...state,
                favourites: state.favourites.filter(
                    (job) => job !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default reducer;