import variables from "../styles/variables.module.css";
import styles from "../styles/footer.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import {MdOutlineAlternateEmail} from "react-icons/md"
import { MdLocationPin} from "react-icons/md"

function Footer(){
    return(
        <footer>
            <div className={styles.mainFooter}>
                <div className={styles.contactDetails}>
                    <p><BsTelephoneFill /> +9160509695</p>
                    <p><MdOutlineAlternateEmail /> shlingala@deloitte.com</p>
                    <p><MdLocationPin />Mumbai, Maharastra</p>
                </div>
                <p className={styles.pMargin}>&copy; Copyright 2023 <b> Mumbai Studios Team</b></p>
            </div>
        </footer>
    );
}
export default Footer;