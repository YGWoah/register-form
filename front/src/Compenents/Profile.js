import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/profilestyles.css'
import styled from 'styled-components'
import bell from './assets/notification2.svg'
import user from './assets/user.svg'
import Contact from './subCompenents/Contact'
import Message from './subCompenents/Message'


const Profile = (props) => {
  let id = props.id
    useEffect(()=>{
        console.log(localStorage.getItem('logininfo'))
        console.log(localStorage.getItem('g'))

    },[])
    const [isRespond,setIsRespond] = useState(false)
    const [response,setResponce] = useState({})
    const getData = async ()=>{
      const response = await axios.post(`/getdata?userID=${id}`)
      .then((res)=>{
        setResponce(res.data.data)
        console.log(res.data.data)
        setIsRespond(true)
      }).catch((error)=>{
        console.log(error);
    })
    }
    const getImapge = ()=>{
      axios.get('https://ui-avatars.com/api/?background=0D8ABC&color=fff')
      .then((res)=>{
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleEnter = (e)=>{
      if(e.keyCode===13){
        
      }
    }
    const [contacts,setContacts]=useState({})
    const getContacts = ()=>{
      axios.get('./getcontacts',{email:"hasan"})
      .then((res)=>{
        setContacts(res);
      })
    }
    
    //just for testing
    useEffect(()=>{
    console.log(response);
    
    },[response])

    useEffect(()=>{
      console.log(contacts);
    },[contacts])
    
  return (
    <div>
      <div className='profile-container'>
          <div className='head'>
              <div ><p>Messaging</p></div>
              <div className='sub-head'>
                  <div>
                      <input type="text" placeholder='Search' onKeyUp={(e)=>handleEnter(e)} />
                  </div>
                  <div>
                    <img src={bell} />
                  </div>
                  <div>
                    <img src={user} />
                  </div>
              </div>
          </div>
          <div className='coore'>
            <div className='chats'>
              <h5>Chats</h5>
              <ul>
                <li>Open</li>
                <li>Read</li>
                <li>Unread</li>
              </ul>
              <div className='contacts'>
                <Contact name={"The wkknd"} message={"Call out my name"} time={"now"}/>
                <Contact name={"YG Woah"} message={"Hello wssp"} time={"12m"}/>
                <Contact name={"Alhassan Zakriti"} message={"if i wont die for you"} time={"2h"}/>

              </div>
            </div>
            <div className='message-section' >
              <Message/>
            </div>
          </div>
      </div>
        
    </div>
    
  )
}

export default Profile

