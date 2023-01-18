import variables from "../styles/variables.module.css";
import styles from "../styles/footer.module.css";

function Footer(){
    return(
        <footer>
            <div className={styles.mainFooter}>
                <p className={styles.pMargin}>&copy; Copyright 2023 <b> My PortFolio </b>- All Rights Reserved</p>
            </div>
        </footer>
    );
}
export default Footer;