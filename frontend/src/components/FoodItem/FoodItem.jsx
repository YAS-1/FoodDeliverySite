
import React, { useState } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/assets';

{/*The Food Item that handles the display for each individual food item*/}
function FoodItem({id, name, price, description, image}) {

    const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt="" />

            {!itemCount ?
                <img src={assets.add_icon_white} onClick={() => setItemCount(pre =>pre+1)} className="add" />
                :
                <div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={() => setItemCount(pre=>pre-1)}/>
                    <p>{itemCount}</p>
                    <img src={assets.add_icon_green} onClick={() => setItemCount(pre=>pre+1)}/>
                </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-price">${price}00</p>
        </div>
    </div>
  )
}

export default FoodItem