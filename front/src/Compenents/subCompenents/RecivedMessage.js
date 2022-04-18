import React from 'react'
import '../styles/sub-styles/recivedmessagestyles.css'
const RecivedMessage = (props) => {
  return (
    <div className='rc-single-msg-sction'>
        <p>{props.message}</p>
    </div>
  )
}

export default RecivedMessage