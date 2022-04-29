import React from 'react'
import './styles/loginStyles.css'
import  { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link,useNavigate ,Navigate} from 'react-router-dom'

const Login = () => {
    axios.defaults.withCredentials = true
    const navigate = useNavigate();
    const [loginInfo,setLoginInfo] = useState({
        email:'',password:''
    })
    const [isLogged,setIsLogged] = useState(false)
    const [id,setId] = useState(0)

    const handleSubmit = async ()=>{
        await axios.post('http://localhost:5501/api/login',loginInfo)
        .then((res)=>{
            if(res.data.succes){
                setId(res.data.userID)
                setIsLogged(true)
                //navigate('profile',{replace:false},)
            }
            console.log(res.data.succes)
        }).catch((error)=>{
            console.log(error);
        })
        
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
                                      Don't have an account? <span><Link to="/signin">Sign up</Link></span>
                                  </p>
                              </div>
                              <form className="signInForm">
                                  <input type="email" name="email" placeholder="email@exemple.com" onChange={handleEmailChange} required/>
                                  <input type="password" name="password" placeholder="Password" onChange={handlePasswordchange} required/>
                                  <input type="button" value="Register" onClick={handleSubmit} />
                                  <br/>
                              </form>
                          </div>
                      </div>
                  </div>
                  {isLogged?(<Navigate to="/profile" />):("")}
    </div>
  )
}

export default Login



