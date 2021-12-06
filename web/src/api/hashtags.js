import axios from 'axios'

export const getHashtags = () => axios.get('auth/hashtags')
