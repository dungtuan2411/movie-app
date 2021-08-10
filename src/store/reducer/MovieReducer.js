import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from "../constants/MovieConst";

const initialState = {
    movieList: [],
    movieDetail: {},
    movieTheaters: [],
    heThongRap: [],
};

export const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIE_LIST:
            state.movieList = payload;
            return { ...state };
        case GET_MOVIE_DETAIL:
            state.movieDetail = payload;
            return { ...state };
        default:
            return state;
    }
};
