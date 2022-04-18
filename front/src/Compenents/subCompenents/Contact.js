import React from 'react'
import user from '../assets/user.svg'
import '../styles/contactstyles.css'
const Contact = (props) => {
  return (
    <div className='single-contact'>
        <div >
            <img src={user} id='img'/>
        </div>
        <div className='contact-info'>
            <h5 className='contact-name'>{props.name}</h5>
            <p className='last-message'>{props.message}</p>
        </div>
        <div className='time'>
            <span className='span'> </span>
            <p className='msg-time'>{props.time}</p>
        </div>
    </div>
  )
}

export default Contact