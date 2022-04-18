import React from 'react'
import '../styles/sub-styles/sentMessagestyles.css'
const SentMessage = (props) => {
  return (
    <div className='single-msg-sction'>
        <p>{props.message}</p>
    </div>
  )
}

export default SentMessage