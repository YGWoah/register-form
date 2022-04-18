import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import SignIn from './SignIn'
import './styles/header.css'

const Header = () => {
    const initialLocation = {
        signIn:false,
        login:false
    }
    const [location,setLocation] = useState(initialLocation)
    const forLogin = ()=>{
        setLocation({...initialLocation,
        login:true})
        console.log("hello")
    }

    const forSignin = ()=>{
        setLocation({...initialLocation,
        signIn:true})
    }

    
    return (
            <div>
                <div className="header">
                    <ul>
                        <li  id="home" className="line different"  onClick={()=>{forLogin()}}><Link to={"/login"}>Login</Link></li>
                        <li id="course" className="different" onClick={()=>{forSignin()}} ><Link to={"/signin"}>Sign In</Link></li>
                    </ul>
                </div>                                     

            </div>
            )
    
}

export default Header