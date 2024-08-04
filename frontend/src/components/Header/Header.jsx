import React from 'react'
import "./Header.css"


{/*The Header Component*/}
function Header() {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Deliciousness delivered right to your doorstep! 🍛🚚</h2>
            <p>Welcome to Food Hub! We’re your go-to destination for mouthwatering meals delivered right to your doorstep. Explore our menu and satisfy your cravings today! Bon appétit!</p>
            <button>View menu</button>
        </div>
    </div>
  )
}

export default Header