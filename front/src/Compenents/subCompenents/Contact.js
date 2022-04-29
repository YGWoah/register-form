import React, { useEffect } from 'react'
import user from '../assets/user.svg'
import '../styles/contactstyles.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { choseMainAcc } from '../state/actionCreators/index';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
const Contact = (props) => {
  let data = useSelector((j)=>j)
  const [Info,setInfo]=useState(data)
  const dispatch = useDispatch()
  const mainContact = bindActionCreators(choseMainAcc,dispatch)
  const handleClick = ()=>{
    mainContact({
      name:props.name,
      email:props.email
    })
  }
  useEffect(()=>{
    console.log(Info)
  },[Info])
  return (
    <div className='single-contact' onClick={()=>{handleClick()}}>
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