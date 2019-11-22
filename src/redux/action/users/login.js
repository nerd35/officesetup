import axios from 'axios';
import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_ERROR,
} from '../types';
import setAuthToken from '../../utils/setAuthToken';


export const loginUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const loginUserFailure = error => ({
    type: SET_CURRENT_USER_ERROR,
    error
});

export const userLoginRequest = userDetails => dispatch => {
    console.log('userDetails: ', userDetails);
    return axios.post(
        'http://voomsway-webapi.herokuapp.com/api/v1/login',
        userDetails,
        { headers: { 'x-api-key': 'Voomsway'} }
    )
        .then((response) => {
            const { token } = response.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(loginUser(response.data));
        }, (error) => {
            console.log('error: ', error);
            alert('Oops! Please login with a valid email or password error');
            dispatch(loginUserFailure(error.response));
            return error.response;
        });
}