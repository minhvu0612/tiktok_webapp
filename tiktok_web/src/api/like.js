import axios from "axios";



//like video
export const likeVideo = (data) => axios.post("http://127.0.0.1:8000/api/like_video", data);
export const checkLikeVideo = (data) => axios.post("http://127.0.0.1:8000/api/check_like_video", data);
export const countLikeVideo = (id) => axios.get("http://127.0.0.1:8000/api/count_like/" + id);
export const dislikeVideo = (data) => axios.post("http://127.0.0.1:8000/api/dislike_video", data);
export const getVideoLike = (id) => axios.get("http://127.0.0.1:8000/api/count_video_like/" + id);
export const getAllVideoLike = (id) => axios.get("http://127.0.0.1:8000/api/load_all_like_video/" + id);


// like cmt

export const likeCmt = (data) => axios.post("http://127.0.0.1:8000/api/like_comment", data); 
export const deleteLikeCmt = (data) => axios.post("http://127.0.0.1:8000/api/delete_like_cmt", data);
export const deleteLikeRep = (data) => axios.post("http://127.0.0.1:8000/api/delete_like_rep", data);