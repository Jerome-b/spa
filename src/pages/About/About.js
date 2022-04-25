/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PngImages } from '../../globals'
import styles from './About.module.scss'

const AboutParagraph = () => {
  return (
    <div className={styles.aboutParagraphContainer}>
      <div className={styles.aboutParagraph}>
        <span className={styles.aboutParagraphTitle}>
          Andy Griffith turned us down.
        </span>
        <span className={styles.aboutParagraphText}>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his nice trailer. That's why you always leave a note!`
        </span>
      </div>
    </div>
  )
}

const AboutImage = () => {
  return (
    <div className={styles.imageContainer}>
      <img src={PngImages.appleImage} className={styles.image} />
    </div>
  )
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutTitle}>About</div>
      <div className={styles.contentContainer}>
        <AboutImage />
        <AboutParagraph />
      </div>
    </div>
  )
}

export default About
