import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Imdb from './pages/Imdb.jsx'
import TVseries from './pages/TVseries.jsx'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import Index from './pages/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/tv-series',
        element: <TVseries />
      },{
        path: '/topimbo',
        element: <Imdb />
      },{
        path: '/movies/:id',
        element : <Movies />
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
