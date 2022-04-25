/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PngImages } from '../../globals'
import styles from './Values.module.scss'

// main image of the section
const ValuesImage = () => {
  return (
    <div className={styles.imageContainer}>
      <img src={PngImages.pyramidImage} className={styles.pyramidImage} />
    </div>
  )
}

// small description of the section
const ValuesDescription = () => {
  return (
    <div className={styles.description}>
      Army had half a day. Bad news. Andy Griffith turned us down. He didn't
      like his trailer.
    </div>
  )
}

// real content of the section
const ValuesContent = () => {
  return (
    <>
      <div className={styles.valuesLeftColumn}>
        Army had half a day. Bad news. Andy Griffith turned us down. He didn't
        like his trailer. That's why you always leave a note! Army had half a
        day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
        That's why you always leave a note! No… but I'd like to be asked! Oh,
        you're gonna be in a coma, all right.
      </div>
      <div className={styles.valuesRightColumn}>
        Army had half a day. Bad news. Andy Griffith turned us down. He didn't
        like his trailer. That's why you always leave a note! Army had half a
        day. Bad news. Andy Griffith turned us down.
      </div>
    </>
  )
}

const Values = () => {
  return (
    <>
      <div className={styles.container}>
        <ValuesImage />
        <div className={styles.valuesTitle}>Our values</div>
        <div className={styles.descriptionContainer}>
          <ValuesDescription />
        </div>
      </div>
      {/* Putting content outside the parent container to avoid the global padding */}
      <div className={styles.descriptionContentContainer}>
        <ValuesContent />
      </div>
    </>
  )
}

export default Values
