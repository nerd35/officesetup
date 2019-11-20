import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_ERROR
} from '../option';

const initialState = {
    isAuthenticated: false,
    user: {},
    error: {},
    redirect: false,
    isLoading: false,
    entry: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                redirect: true,
                user: action.user,
                isLoading: true
            };
        case SET_CURRENT_USER_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                error: action.error
            };
        default: return state;
    }
};