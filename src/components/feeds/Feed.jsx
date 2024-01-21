import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'
import './Feeds.css'
import Comments from '../comments/Comments'

import { useState } from 'react'

import CommentData from '../../FackApis/CommetData'

export default function Feed({fed}) {

    let[openComment, setOpenComment] = useState(false);
    const CommentHandler= ()=>{
        setOpenComment(!openComment) 
    }
  return (
    <div className="feed" key={fed.id}>
        <div className="top-container">
            <Link to="/profile/id">
        <div className="user">
            <img src={fed.feedProfile} alt=""/>
            <div>
            <h5>{fed.name}</h5>
            <small>1 Minutes Ago</small>
            </div>
        </div>
        </Link>
        <span><FontAwesomeIcon icon={faListDots}/></span>
        </div>
        <div className="mid-content">
            <p>{fed.desc}</p>
            <img src ={fed.feedImage} alt=""></img>
        </div>
        <div className="bottom-content">
            <div className="action-item">
                <span><FontAwesomeIcon icon={faHeart}/> 12 Likes</span>
            </div>

            <div className="action-item" onClick={CommentHandler}>
                <span><FontAwesomeIcon icon={faComment}/> 2 Comments</span>
            </div>

            <div className="action-item">
                <span><FontAwesomeIcon icon={faShare}/> 11 Shares</span>
            </div>
        </div>
        {openComment && <Comments/>}
    </div>
  )
}
