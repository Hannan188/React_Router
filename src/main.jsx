import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router  = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[{
      path:"",
      element:<Home />
    },{
      path: "about",
      element:<About />

    },{
      path:"contact",
      element:<Contact />
    },{
      path:"user/:id",
      element:<User />
    },{
      path:"/github",
      element:<Github />
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
