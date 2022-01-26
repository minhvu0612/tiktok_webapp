import axios from 'axios';

export const onLogin = (data) => axios.post('http://127.0.0.1:8000/api/login', data);