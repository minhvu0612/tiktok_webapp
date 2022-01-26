import axios from 'axios';

export const onUpdate = (data) => axios.post('http://127.0.0.1:8000/api/update_user', data);