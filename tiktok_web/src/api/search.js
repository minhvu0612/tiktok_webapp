import axios from "axios";

export const get_users = (data) => axios.post("http://127.0.0.1:8000/api/search_users", data);
export const get_videos = (data) => axios.post("http://127.0.0.1:8000/api/search_videos", data);