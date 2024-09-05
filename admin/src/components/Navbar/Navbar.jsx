import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'


function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src={assets.logo_1} alt="" />
        <img className='profile' src="" alt="" />
    </div>
  )
}

export default Navbar