import axios from 'axios';

export const onFollow = (data) => axios.post('http://127.0.0.1:8000/api/follow', data);
export const onCheckFollow = (data) => axios.post('http://127.0.0.1:8000/api/check_follow', data);
export const onUnfollow = (data) => axios.post('http://127.0.0.1:8000/api/unfollow', data);
export const onCountFollow = (id) => axios.get('http://127.0.0.1:8000/api/count_follow/' + id);
export const onFollowingUser = (id) => axios.get('http://127.0.0.1:8000/api/following_user/' + id);
export const onFollowingUserList = (id) => axios.get('http://127.0.0.1:8000/api/following_user_list/' + id);