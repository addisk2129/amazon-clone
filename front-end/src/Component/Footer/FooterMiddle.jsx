import React from "react";
import styles from "./Footer.module.css";

function FooterMiddle() {
  return (
    <div className={styles.footerMiddle}>
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon"
      />
      <div className={styles.selectors}>
        <select>
          <option>English</option>
          <option>Español</option>
        </select>
        <select>
          <option>USD - U.S. Dollar</option>
          <option>EUR - Euro</option>
        </select>
        <select>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>India</option>
        </select>
      </div>
    </div>
  );
}

export default FooterMiddle;
