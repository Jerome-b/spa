import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import routes from '../../routes'
import Header from '../Header/Header'
import styles from './LayoutContainer.module.scss'

const LayoutContainer = () => {
  return (
    <div className={styles.container}>
      {/* Map routes to a header in order to be able to custom header for specific route */}
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<Header />} />
      </Routes>
      <main>{routes}</main>
    </div>
  )
}

export default LayoutContainer
