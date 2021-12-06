import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.withCredentials = true
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] =
    'Bearer' + localStorage.getItem('token')
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
