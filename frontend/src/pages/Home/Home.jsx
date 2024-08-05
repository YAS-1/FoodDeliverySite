import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExpoMenu from '../../components/ExpoMenu/ExpoMenu'


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
    </div>
  )
}

export default Home