import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './i18next'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

import * as serviceWorker from './serviceWorker'
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '2178207aa7f267c8db9b',
  cluster: 'ap1',
  encrypted: true,
  authEndpoint: '/broadcasting/auth',
})
console.log(window.Echo)
ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
