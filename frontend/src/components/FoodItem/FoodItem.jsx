
import React from 'react'
import "./FoodItem.css";

{/*The Food Item that handles the display for each individual food item*/}
function FoodItem({id, name, price, description, image}) {
  return (
    <div className='food-item'>
        <div className="food-item-imag-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
    </div>
  )
}

export default FoodItem