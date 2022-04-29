import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/profilestyles.css'
import styled from 'styled-components'
import bell from './assets/notification2.svg'
import user from './assets/user.svg'
import Contact from './subCompenents/Contact'
import Message from './subCompenents/Message'


const Profile = () => {
  axios.defaults.withCredentials=true;
    useEffect(()=>{
        getContacts()
    },[])
    
    
    const handleEnter = async (e)=>{
      if(e.keyCode===13){
        await axios.post('http://localhost:5501/api/addcontact',{userEmail:e.target.value})
        .then((res)=>{console.log(res);})
        .catch((eroor)=>{
          console.log(("error"));
        })
      }
    }
    const [contactLoaded,setContactLoaded] = useState(false)
    const [contacts,setContacts]=useState([])
    const getContacts = async ()=>{
      await axios.get('http://localhost:5501/api/allcontacts')
        .then((res)=>{
            setContacts(res.data.data.resp)
            setContactLoaded(true)
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    useEffect(()=>{
      console.log("contacts")
      console.log(contacts);
      displayContacts()
    },[contacts])
  let  dispalyedContact;
  const displayContacts = ()=>{
    
    dispalyedContact=contacts.map((contact) => 
      {return <Contact name={contact.LastName+contact.LastName} message={"Call out my name"} time={"now"}/>
      })
      console.log(dispalyedContact)
    document.getElementsByClassName("contacts").textContent = "dispalyedContact"; 
     
  }  
  const [mainContact,setMainContact] = useState("...5")
  const handleContactOnClick = (e)=>{
    console.log("name:",e.target.name)
  }
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
                {contactLoaded?(contacts.map((contact) => { 
                  return <Contact email={contact.email} name={contact.LastName+" "+contact.LastName} message={"Call out my name"} time={"now"} onclick={(e)=>handleContactOnClick}/>
                })):"Loading.."}
              </div>
            </div>
            <div className='message-section' >
              <Message  />
            </div>
          </div>
      </div>
        
    </div>
    
  )
}

export default Profile

