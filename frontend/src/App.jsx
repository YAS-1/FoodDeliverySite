import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/"  exact element={<Home/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
        <Route path="/order"  element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App