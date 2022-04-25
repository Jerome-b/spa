import React from 'react'
import { PngIcons, PngImages } from '../../globals'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Left side of header */}
      <div className={styles.leftList}>
        <img src={PngImages.logoBlack} />
      </div>
      {/* Right side of header */}
      <div className={styles.rightContainer}>
        <div className={styles.rightList}>
          <div>Menu</div>
          <div>
            <img src={PngIcons.hamburgerMenu} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
