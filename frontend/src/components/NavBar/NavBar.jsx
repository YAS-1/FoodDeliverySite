import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import { assets } from '../../assets/assets'

{/*The Navbar component*/}
function NavBar( {setShowLogin} ) {

  const [menu, setMenu] = useState("mobile-app");

  return (
    <div className='navbar'>

      <div className='label'><img src={assets.logo_a} alt="" className='logo'/></div>
        {/* <img src={assets.logo} alt="" className='logo'/> */}

        <ul className="navbar-menu">
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
            <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
            <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
            <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default NavBar