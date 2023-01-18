import { Link } from "react-router-dom"
import styles from "../styles/header.module.css"

function Header() {

  return (
    <>
      <div className={styles.stick_top}>
        <div className={styles.mainHeader}>
          <div className={styles.leftNav}>
            <span><Link to="/">My PortFolio</Link></span>
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