import axios from 'axios';

export const onLoadAll = () => axios.get('http://127.0.0.1:8000/api/load_users');