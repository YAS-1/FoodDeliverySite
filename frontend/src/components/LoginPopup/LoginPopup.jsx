import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
function LoginPopup({setShowLogin}) {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form action="" className="login-pop-container">
            <div className="login-pop-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
        </form>
    </div>
  )
}

export default LoginPopup