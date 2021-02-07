import axios from 'axios';
import {
    AUTH_USER,
    LOGIN_USER
} from './types';

export function auth(dataToSubmit) {
    const request = axios.get('/api/users/auth', dataToSubmit)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    };
};

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    };
};

