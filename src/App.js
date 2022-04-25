import React from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import LayoutContainer from './components/Layout/LayoutContainer'

const App = () => {
  return (
    <BrowserRouter basename={'/'}>
      <LayoutContainer />
    </BrowserRouter>
  )
}

export default App
