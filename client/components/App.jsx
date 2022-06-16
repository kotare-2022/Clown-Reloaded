import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HotModuleReplacementPlugin } from 'webpack'





const App = () => {
  

  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/outfit'element={<Outfit/>} />
        <Route path='/clownResult'element={<ClownResult/>} />
      </Routes>

    </div>
  )
}

export default App
