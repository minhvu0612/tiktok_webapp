import axios from 'axios';

export const onGetVideoByUser = (id) => axios.get('http://127.0.0.1:8000/api/get_video/user/' + id);
export const onGetVideoById = (id) => axios.get('http://127.0.0.1:8000/api/get_video/' + id);
export const onGetAllVideo = () => axios.get('http://127.0.0.1:8000/api/load_videos');
export const onUpVideo = (data) => axios.post('http://127.0.0.1:8000/api/upload_video', data);