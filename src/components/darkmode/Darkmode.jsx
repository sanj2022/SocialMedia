import React from 'react'
import './Darkmode.css'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Darkmode() {

    const DarkHandle =()=>{
        document.querySelector('body').classList.toggle('darkmode');
    }
  return (
    <div className='dark-mode-icon'> 
       <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandle} />
        </div>
  )
}
