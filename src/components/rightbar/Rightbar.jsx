import React from 'react'
import'./rightbar.css'
import Message from '../message/message'
import FriendReq from '../friendReq/friendReq'


export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-container">
      <Message/>
      <FriendReq/>
      </div>

    </div>
  )
}
