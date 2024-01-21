import React from 'react'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/home'
import Profile from '../pages/profile/profile'
import Chatbox from '../pages/chatbox/chatbox'

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Rightbar from '../components/rightbar/Rightbar'
import Nav from '../components/nav/nav'

export default function Layout() {
 

  const Feed =() =>{
    return(
     <>
     <Nav/>
      <main>
        <Leftbar/>
        <div className='container'>
          <Outlet/>
        </div>
        <Rightbar/>
     </main>
     </>
    )
  }
    const router = createBrowserRouter([
      {
        path:"/",
        element:<Feed/>,
        children:[
          { path:'/',
           element:<Home/>
        },
        { path:'/profile/:id',
           element:<Profile/>
        },
        { path:'/chatbox/:id',
           element:<Chatbox/>
        },

        ]
      },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        
          ])
        
          return (
        
            <>
           <RouterProvider router={router}/>
            </>

  )
}

