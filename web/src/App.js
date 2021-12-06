import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM, { Switch } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

import { routes } from './pages/Routes'
import HomePage from './pages/HomePage/HomePage'
console.log(routes)
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            ></Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}
export default App
