import React from 'react'
import './styles/loginStyles.css'
import  { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const SignIn = () => {

    const [loginInfo,setLoginInfo] = useState({
        name :'',lastname:'',email:'',password:''
    })
    const handleSubmit = async ()=>{
        await axios.post('http://localhost:5501/api/signin',loginInfo)
        .then((res)=>{
            console.log(res.status)
            if(res.status===400){
                console.log("is bad");
            }
        }).catch((error)=>{
            console.log(error);
        })
        setIsSIgnedIn(true)
    }

    const [isSignIn,setIsSIgnedIn] = useState(false)

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
        <div className="big-container">
                <div className="container flex-row">
                    
                    <div className="chiaar">
                        <div className="big-chiaar">
                            <h3>
                                Welcome again<span >.</span>
                            </h3>
                        </div>
                        <div className="small-chiaar">
                            <p>
                                Don't have an account? <span><Link to="/login">Log In</Link></span>
                            </p>
                        </div>
                        <form className="signInForm">
                             <input type="text" name="firstName" placeholder="First Name" onChange={handlenameChange} required/>
                            <input type="text" name="lastName" placeholder="Last Name" onChange={handleLastnameChange}/>
                            <input type="email" name="email" placeholder="email@exemple.com" onChange={handleEmailChange} />
                            <input type="password" name="password" placeholder="Password" onChange={handlePasswordchange} />
                            <input type="button" value="Register" onClick={handleSubmit} />
                            <br/>
                            <p id='presponse'>{isSignIn?"Your Requesst is Submitted":""}</p>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignIn