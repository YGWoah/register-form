import React from 'react'
import './style.css'
import axios from 'axios'

const Login = () => {
    const handleSubmit = ()=>{
        axios.post('/login',{name:"hamza",lastname:"masoudi"})
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
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
                    <form className="form-2" onSubmit={handleSubmt()}>
                        <input type="text" name="firstName" placeholder="First Name" required/>
                        <input type="text" name="lastName" placeholder="Last Name" />
                        <input type="email" name="email" placeholder="email@exemple.com"  />
                        <input type="password" name="password" placeholder="Password"  />
                        <input type="submit" value="Register"  />
                        <div class="list">
                            <ul class="in-list">
                                <li>
                                    <a href="#"><img src="./images/instagram.png" alt="Instagram" className="in-image"/></a>
                                </li>
                                <li>
                                    <a href="#"><img src="./images/facebook.png" alt="Facebook" className="in-image"/></a>
                                </li>
                                <li>
                                    <a href="#"><img src="./images/linkedin.png" alt="Linkedin" className="in-image"/></a>
                                </li>
                            </ul>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login