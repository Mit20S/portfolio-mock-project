import styles from "../styles/header.module.css"
import { useEffect, useState } from 'react';

function Header() {

  return (
    <>
      <div className={styles.stick_top}>
        <div className={styles.mainHeader}>
          <div className={styles.leftNav}>
            <span>My PortFolio</span>
          </div>
          <div>
            <ul className={styles.rightNav}>
              <li>Profile</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Professional</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
