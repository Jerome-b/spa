import React from 'react'
import About from '../About/About'
import Values from '../Values/Values'
import Vision from '../Vision/Vision'

const Home = () => {
  return (
    <div>
      {/* Breaking down each main component for better maintainability and re-usability */}
      <About />
      <Vision />
      <Values />
    </div>
  )
}

export default Home
