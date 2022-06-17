import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// IMPORT COMPONENTS
import Home from './Home'
import Outfit from './Outfit'
import ClownResult from './ClownResult'
import Header from './Header'
import Footer from './Footer'



const App = () => {
  

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/outfit'element={<Outfit/>} />
        <Route path='/clownResult'element={<ClownResult/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
