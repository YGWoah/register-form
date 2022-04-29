import React, { useEffect, useState ,useRef} from 'react'
import SentMessage from './SentMessage'
import user from '../assets/user.svg'
import RecivedMessage from './RecivedMessage'
import '../styles/messagestyles.css'
import send from '../assets/send.svg'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Message = () => {
  axios.defaults.withCredentials=true;
  const data = useSelector((data)=>data.reducer[0])
  
  const emailWith = useRef();
  
  const [meesages,setMessages] = useState([])
  
  const getMessages= async ()=>{
    await axios.post('http://localhost:5501/api/getallmessages',{withEmail:emailWith})
    .then((res)=>{
      setMessages(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  } 
  useEffect(()=>{
    getMessages()
  },[])
  useEffect(()=>{
    console.log(meesages)
  },[meesages])

  const handleClick = async()=>{
    await axios.post('http://localhost:5501/api/sendmessage',{to:data.email,message:message})
    .then((res)=>{
      console.log(res)
    }).catch((res)=>{
      console.log(res);
    })
  }

  const [message,setMessage]=useState('')
  const handlMessageOnChange=(e)=>{
    setMessage(e.target.value)
  }
  return (
    <div className='chatt-container' >
                <div className='contact-head'>
                  <img src={user}/>
                  <h5 useRef={emailWith}>{data.name}</h5>
                </div>
                <div className='chatt'>
                    <SentMessage message={"Hello My nigga"}/>
                    <RecivedMessage message={"Wssp what You up to baby"}/>
                </div>
                <div className='write-msg'>
                    <input type="text" placeholder='Write a message' onChange={(e)=>{handlMessageOnChange(e)}}/>
                    <img src={send} onClick={()=>{handleClick()}} />
                </div>
    </div>
  )
}

export default Message