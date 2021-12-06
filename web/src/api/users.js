import axios from 'axios'

export const getUsers = () => axios.get('auth/users')
