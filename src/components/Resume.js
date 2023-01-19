import Header from "./Header"
import Footer from "./Footer"

import variables from "../styles/variables.module.css";
import styles from "../styles/resume.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Resume(){
    // Declaring the constant url
    const url = "http://localhost:3000/education/";

    return(
        <>
            <Header />
            <div className={styles.mainHeading}>
               <h1 className={styles.mainTitle}>RESUME</h1>
            </div>
            {/* <hr/> */}
            <div className={styles.mainBlock}>
                {/* {result} */}
            </div>

            <div>
              <input type="button" value="Download Resume"/>
            </div>
            <Footer />
        </>
    );
}
export default Resume;