import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Computer from './components/Computer/Computer.jsx'
import Home from './components/Computer/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/laptop', Component: Laptop },
      { path: '/computer', Component: Computer }
    ]
  },
  // {
  //   path: '/service',
  //   element: <h1>service</h1>,
  // },
  {
    // path:'/doc',
    // element:<h2>Doc</h2>
    path: '/app',
    Component: App,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
