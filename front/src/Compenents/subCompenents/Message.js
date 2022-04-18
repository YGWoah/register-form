import React from 'react'
import SentMessage from './SentMessage'
import user from '../assets/user.svg'
import RecivedMessage from './RecivedMessage'
import '../styles/messagestyles.css'
import send from '../assets/send.svg'

const Message = () => {
  return (
    <div className='chatt-container' >
                <div className='contact-head'>
                  <img src={user}/>
                  <h5>YG Woah</h5>
                </div>
                <div className='chatt'>
                    <SentMessage message={"Hello My nigga"}/>
                    <RecivedMessage message={"Wssp what You up to baby"}/>
                </div>
                <div className='write-msg'>
                    <input type="text" placeholder='Write a message'/>
                    <img src={send} />
                </div>
    </div>
  )
}

export default Message