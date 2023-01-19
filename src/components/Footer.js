import variables from "../styles/variables.module.css";
import styles from "../styles/footer.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import {MdOutlineAlternateEmail} from "react-icons/md"
import { MdLocationPin} from "react-icons/md"

import {useState, useEffect} from "react"
import axios from "axios";

import GetData from "./GetData";

function Footer(){

    const url = "http://localhost:3000/profile/";

    const [mainObj, setmainObj] = useState("");

    GetData(url, mainObj, setmainObj)

    return(
        <footer>
            <div className={styles.mainFooter}>
                <div className={styles.contactDetails}>
                    <p><BsTelephoneFill /> {mainObj.phone}</p>
                    <p><MdOutlineAlternateEmail /> {mainObj.deloitte_mail}</p>
                    <p><MdLocationPin />{mainObj.location}</p>
                </div>
                <p className={styles.pMargin}>&copy; Copyright {mainObj.year} <b> Mumbai Studios Team</b></p>
            </div>
        </footer>
    );
}
export default Footer;