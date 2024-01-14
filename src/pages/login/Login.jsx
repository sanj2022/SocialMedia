import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
    <div className='card'>
        <div className="left">
         <h2>SocialMedia<br/>-</h2>
         <p>Build Via React and Vite !!</p>
         <span>Don't Have An Account?</span>
         <Link to="/signup">
         <button className='btn btn-primary'>Register</button>
         </Link>
         
        </div>
        <form className="right">
        <input type="text" required placeholder='username'/>
        <input type="password" required placeholder='password'/>
        <button type="submit" className='btn'>Login</button>
    </form>
    </div>
    </div>
  )
}


