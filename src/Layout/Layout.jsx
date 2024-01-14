import React from 'react'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function Layout() {
 
    const router = createBrowserRouter([
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

