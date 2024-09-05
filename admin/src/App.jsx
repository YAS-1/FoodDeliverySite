import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './pages/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='app-content'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
