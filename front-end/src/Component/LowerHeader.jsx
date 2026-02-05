import React from 'react'
import { TiThMenu } from "react-icons/ti";
import styles from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={styles.lowerHeader}>
      <ul className={styles.navList}>
        
        <li className={`${styles.navItem} ${styles.allMenu}`}>
          <TiThMenu className={styles.menuIcon} />
          <p>All</p>
        </li>

        <li className={styles.navItem}>Today's Deals</li>
        <li className={styles.navItem}>Customer Service</li>
        <li className={styles.navItem}>Registry</li>
        <li className={styles.navItem}>Gift Cards</li>
        <li className={styles.navItem}>Sell</li>

      </ul>
    </div>
  )
}

export default LowerHeader;
