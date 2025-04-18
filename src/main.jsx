import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Computer from './components/Computer/Computer.jsx'
import Home from './components/Computer/Home/Home.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import Posts from './components/Posts/Posts.jsx'
import Posts2 from './components/Posts2/Posts2.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'
// user json
const usersPromiss = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
// posts json
const posts2Promiss = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/laptop', Component: Laptop },
      { path: '/computer', Component: Computer },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users/:usersId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: UserDetails,
      },
      {
        path: 'users2',
        element:
          <Suspense fallback={<span>loding...</span>}>
            <Users2 usersPromiss={usersPromiss}></Users2>
          </Suspense>
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },
      {
        path: 'posts/:postsId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        Component: PostDetails,
      },
      {
        path: 'posts2',
        element: <Suspense fallback={<span>data loding ...</span>}>
          <Posts2 posts2Promiss={posts2Promiss}></Posts2>
        </Suspense>
      },

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
  },
  {
    path: '*',
    element: <div>
      <img src="https://images.unsplash.com/photo-1544952019-734321a2a151?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" sunflower" />
      <div style={{
      color: 'red',
      border: "3px dashed purple",
      borderRadius: '50px',
      margin: '10px',
      padding: '10px',
    }}>
      <h2><i>not found 404 status</i></h2>
      <p><i>oii,,,srabonti bhul patha chak kortaso . </i></p>
    </div>
    </div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
