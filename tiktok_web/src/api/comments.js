import axios from 'axios';

export const saveComment = (data) => axios.post("http://127.0.0.1:8000/api/comments", data);
export const loadComment = (data) => axios.post("http://127.0.0.1:8000/api/load_comments", data);