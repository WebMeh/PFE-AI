// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:9090';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
        localStorage.setItem('jwtToken', JSON.stringify(response.data));
    }
    return response.data;
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('jwtToken'));
};

export const logout = () => {
    localStorage.removeItem('jwtToken');
};
