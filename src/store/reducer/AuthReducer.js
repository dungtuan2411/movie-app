import { ADD_USER } from "../constants/AuthConst";

const initialState = {
    // thong tin đăng nhập
    credential: null,
    error: "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            state.credential = payload;
            return { ...state };
        case "GET_ERRORS":
            state.error = payload;
            return { ...state };
        default:
            return state;
    }
};
