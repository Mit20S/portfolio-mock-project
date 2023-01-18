import styles from "../styles/header.module.css"
import { Link } from 'react-router-dom';

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
              <li><Link to = "/education" className={styles.linkStyle}>Education</Link></li>
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