import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExpoMenu from '../../components/ExpoMenu/ExpoMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';


{/*The Home page*/}
function Home() {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExpoMenu
        category={category}
        setCategory={setCategory}
        />
        <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home