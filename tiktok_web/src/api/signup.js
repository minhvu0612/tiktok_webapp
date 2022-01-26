import axios from 'axios';

export const getUser = (data) => axios.post('http://127.0.0.1:8000/api/signup', data);