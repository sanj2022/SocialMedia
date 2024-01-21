import React from 'react'
import './Comment.css'
import CurrentUserData from '../../FackApis/CurrentUserData'
import CommentData from '../../FackApis/CommetData'
import { Link } from 'react-router-dom'

export default function Comments() {
  return (
    <div className="comments">
        <div className="writebox">
            <form action="#">
                <div className="user">
                <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt=""/>
                <input type="text" placeholder='Write a comment'/>
                <button type="submit" class="btn btn-p[rimary">Send</button>
                </div>
            </form>
        </div>

       {
        CommentData.map(comments=>(
            <Link to='/profile/id'>
                <div className="user" key={comments.id}>
                    <img src={comments.commentProfile} alt=""/>
                    <div>
<h5>{comments.name}</h5>
<p>{comments.CommeText}</p>
</div>
                </div>
            </Link>
        ))
       }
    </div>
  )
}
