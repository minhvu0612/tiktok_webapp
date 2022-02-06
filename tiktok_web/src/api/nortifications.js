import axios from 'axios'

export const onGetNorti = (id) =>
  axios.get('http://127.0.0.1:8000/api/get_nortifications/' + id)
export const markAsRead = (id) =>
  axios.post('http://127.0.0.1:8000/api/mark_read', { id: id })
