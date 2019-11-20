import axios from 'axios';
import Swal from 'sweetalert2';
import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_ERROR
} from '../option';

import setAuthToken from "./setAuthToken";
import Swal from "sweetalert2";

export const loginUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const loginUserFailure = error => ({
    type: SET_CURRENT_USER_ERROR,
    error
});

export const userLoginRequest = userDetails => dispatch => axios.post(
    'http://voomsway-webapi.herokuapp.com/api/v1',
    userDetails
)
    .then((response) => {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(loginUser(response.data));
    }, (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login with a valid email or password'
        });
        dispatch(loginUserFailure(error.response));
        return error.response;
    });


