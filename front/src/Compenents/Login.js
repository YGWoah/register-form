import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

const Login = () => {
    const [loginInfo,setLoginInfo] = useState({
        name :'',lastname:'',email:'',password:''
    })
    const handleSubmit = async ()=>{
        await axios.post('/login',loginInfo)
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handlenameChange = (e)=>{
        let tempname = e.target.value
        setLoginInfo({...loginInfo,name:tempname})
    }

    const handleLastnameChange = (e)=>{
        let tempLastname = e.target.value
        setLoginInfo({...loginInfo,lastname:tempLastname})
    }

    const handleEmailChange = (e)=>{
        let tempEmail = e.target.value
        setLoginInfo({...loginInfo,email:tempEmail})
    }

    const handlePasswordchange = (e)=>{
        let tempPassword = e.target.value
        setLoginInfo({...loginInfo,password:tempPassword})
    }


  return (
    <div>
        <div className="container">
            <div className="header">
                <div >
                    <p className="parag">
                        JOIN US SO YOu CAN<br/>GET THE WHOLE<br/>EXEPERIENCE
                    </p>
                </div>
            </div>
            <div className="form-0">
                <div className="form-1">
                    <div>
                        <p>JOIN THE GANG</p>
                    </div>    
                </div>
                <div>
                    <form className="form-2" >
                        <input type="text" name="firstName" placeholder="First Name" onChange={handlenameChange} required/>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleLastnameChange}/>
                        <input type="email" name="email" placeholder="email@exemple.com" onChange={handleEmailChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handlePasswordchange} />
                        <input type="button" value="Register" onClick={handleSubmit} />
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login