import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExpoMenu from '../../components/ExpoMenu/ExpoMenu'


{/*The Home page*/}
function Home() {
  return (
    <div>
        <Header/>
        <ExpoMenu/>
    </div>
  )
}

export default Home