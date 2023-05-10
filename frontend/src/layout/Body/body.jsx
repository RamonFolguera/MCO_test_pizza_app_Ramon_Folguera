import React from 'react'

import { Home } from '../Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Menu } from '../Menu/Menu'

export const Body = () => {
  return (
    <> 
    <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizza-menu" element={<Menu/>}/>
    
    </Routes>
    </>
  )
}
