import React from 'react'
import HomePage from './HomePage/HomePage'
import PersonalPage from './PersonalPage/personal'
import VideoDetail from './VideoDetail/VideoDetail'

export const routes = [
  {
    path: '/',
    exact: true,
    element: <HomePage />,
  },
  {
    path: '/:user/video/:id',
    exact: true,
    element: <VideoDetail />,
  },
  {
    path: '/personal',
    exact: true,
    element: <PersonalPage />,
  }
]
