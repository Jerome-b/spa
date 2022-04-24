import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import App from './App'

// create routes for our app
export default (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
)
