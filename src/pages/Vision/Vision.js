/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './Vision.module.scss'

// big title vision section
const VisionTitle = () => {
  return (
    <div className={styles.visionTitle}>
      <div className={styles.visionTitleChild}>Our vision</div>
    </div>
  )
}

// section content
const VisionParagraph = () => {
  return (
    <div className={styles.visionParagraphContainer}>
      <div className={styles.visionDescriptionContainer}>
        <div className={styles.visionDescription}>
          <span className={styles.visionDescription}>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer.
          </span>
        </div>
      </div>
      <div className={styles.visionContentContainer}>
        <div className={styles.visionContent}>
          <span className={styles.visionContent}>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer. That's why you always leave a note! Army
            had half a day. Bad news. Andy Griffith turned us down. He didn't
            like his trailer. That's why you always leave a note! No… but I'd
            like to be asked! Oh, you're gonna be in a coma, all right.
          </span>
        </div>
      </div>
    </div>
  )
}

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <VisionTitle />
        <VisionParagraph />
      </div>
    </div>
  )
}

export default Vision
