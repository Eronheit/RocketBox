import axios from 'axios';

const api = axios.create({
    baseURL: 'https://week-6-backend.herokuapp.com',
});

export default api;
