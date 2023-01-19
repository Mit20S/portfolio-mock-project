import Header from "../components/Header";
import Footer from "../components/Footer";
import Img from "../assets/personal.jpg";
import styles from "../styles/profile.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { AiFillGithub, AiFillFacebook , AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

function Profile(){

    const url = "http://localhost:3000/profile/";

    const [summary, setSummary] = useState("");

    axios.get(url).then( resData => 
    {
        setSummary(resData.data.summary);
    });

    return(
        <section>
            <Header />
            <section className={styles.imgDesc}>
                <img src={Img} alt="personal"/>
                <p>{summary}</p>
            </section>
            <section className={styles.social}>
                <h1>Socials</h1>
                <div className={styles.icons}>
                    <a target="blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillGithub /> </a>
                    <a target="blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillFacebook /> </a>
                    <a target="blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillTwitterCircle /> </a>
                    <a target="blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillInstagram /> </a>
                </div>
            </section>
            <Footer />
        </section>
    )
} 

export default Profile;