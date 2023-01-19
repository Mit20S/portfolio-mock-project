import Header from "../components/Header";
import Footer from "../components/Footer";
import Img from "../assets/personal.jpg";
import styles from "../styles/profile.module.css";
import { useState } from 'react';
import axios from 'axios';

import { AiFillGithub, AiFillFacebook , AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

function Profile(){

    const url = "http://localhost:3000/profile/";

    const [mainObj, setmainObj] = useState("");

    axios.get(url).then( resData => 
    {
        setmainObj(resData.data);
    });

    return(
        <section>
            <Header />
            <section className={styles.imgDesc}>
                <div className={styles.imgName}>
                    <img src={Img} alt="personal"/>
                    <h1>{mainObj.name}</h1>
                </div>
                <p>{mainObj.summary}</p>
            </section>
            <section className={styles.social}>
                <h1>Socials</h1>
                <div className={styles.icons}>
                    <a target="blank" href={mainObj.github}><AiFillGithub /> </a>
                    <a target="blank" href={mainObj.facebook}><AiFillFacebook /> </a>
                    <a target="blank" href={mainObj.twitter}><AiFillTwitterCircle /> </a>
                    <a target="blank" href={mainObj.instagram}><AiFillInstagram /> </a>
                </div>
            </section>
            <Footer />
        </section>
    )
} 

export default Profile;