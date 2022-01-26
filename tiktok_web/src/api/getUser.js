import axios from 'axios';

export const onGetUser = (id) => axios.get('http://127.0.0.1:8000/api/get_user/' + id);