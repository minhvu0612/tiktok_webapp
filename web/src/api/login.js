import axios from 'axios'
// const config = {
//   headers: { 'content-type': 'application/json' },
//   'X-CSRFToken': Cookies.get('csrftoken'),
//   withCredentials: true,
// }
export const login = (email, password) =>
  axios.post('auth/login', { email, password })
export const getUser = (config) => axios.get('/auth/user-profile', config)
export const logout = () => axios.post('/auth/logout')
