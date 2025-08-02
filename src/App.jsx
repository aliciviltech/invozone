import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App