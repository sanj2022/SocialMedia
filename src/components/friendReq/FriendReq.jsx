import React from 'react'
import './FriendReq.css'
import FriendReqData from '../../FackApis/FirendReqData'
import { Link } from 'react-router-dom'

export default function FriendReq() {
  return (
    <div className='frienedReq'>
        <h4>Friend Requests</h4>

        {
          FriendReqData.map(friendReq=>(
            <div className="request">
             <Link to="/profile/id"  >
                <div className="info" key={friendReq.id}>
                    <div className="user">
                     <img src={friendReq.img} alt=""/>   
                     <h5>{friendReq.name}</h5>
                    </div>
                    <div className="info-name">
                        <p>{friendReq.info}</p>
                    </div>
                </div>
                </Link> 

                <div className="action">
                  <button className='btn btn-primary'>Accept</button> 
                  <button className='btn btn-red'>Delete</button> 
                </div>

            </div>

          ))
        }

    </div>
  )
}
