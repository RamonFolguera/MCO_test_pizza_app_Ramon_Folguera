import React from 'react'

import { Home } from '../Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

export const Body = () => {
  return (
    <> 
    <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
    
    </Routes>
    </>
  )
}
