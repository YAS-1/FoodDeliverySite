import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';


{/*The Food Display compnent. The section where the food items will be displayed*/}
function FoodDisplay({category}) {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Our top dishes</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category) {
            return(
              <FoodItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            )
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay