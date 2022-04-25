import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'

// create routes for our app
export default (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
    {/* Fallback on inexistant route */}
    <Route path="*" element={<Navigate replace to="/home" />} />
  </Routes>
)
