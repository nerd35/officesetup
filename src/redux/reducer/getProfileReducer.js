import
{
    GET_ENTRIES,
    GET_PROFILE
} from '../action/types';

const initialState = {
    profile: {
        email: 'ekarztest@gmail.com',
        password: 'password'
    },
    isLoading: true
};

function getProfileReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_PROFILE:
        case GET_ENTRIES:
            return {
                ...state,
                profile: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export default getProfileReducer;