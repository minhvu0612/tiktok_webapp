import Header from '../../layouts/Header/Header'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import './styles.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Video from './../../components/Login/Video/Video'
function HomePage(props) {
  const location = useLocation()
  return (
    <div>
      <Header user={location.state} />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Video />
        </div>
      </div>
    </div>
  )
}

export default HomePage
