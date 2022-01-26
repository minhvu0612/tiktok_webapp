import axios from "axios";

export const loadHashtag = () => axios.get("http://127.0.0.1:8000/api/load_hashtag");