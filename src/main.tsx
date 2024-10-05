import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './layouts/App.tsx'
import Home from './components/Home.tsx'
import Create from './components/Create.tsx'
import Noticed from './components/Noticed.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Create />,
      }, 
      {
        path: "/noticed",
        element: <Noticed />
      },
      { 
        index: true,
        element: <Home />  
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
