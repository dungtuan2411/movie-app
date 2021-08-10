import { START_LOADING, STOP_LOADING } from "../constants/CommonConst";

const initialState = {
    loading: false,
};

export const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            state.loading = true;
            return { ...state };
        case STOP_LOADING:
            state.loading = false;
            return { ...state };
        default:
            return state;
    }
};
