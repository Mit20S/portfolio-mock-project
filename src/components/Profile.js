import Header from "../components/Header";
import Footer from "../components/Footer"
import Img from "../assets/personal.jpg";
import styles from "../styles/profile.module.css"

import { AiFillGithub, AiFillFacebook , AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

function Profile(){
    return(
        <section>
            <Header />
            <section className={styles.imgDesc}>
                <img src={Img} alt="personal"/>
                <p>A <span>dedicated</span>, <span>organised</span> and <span>methodical</span> individual who has good interpersonal skills, is an excellent team worker and is very willing to learn and develop new skills. I am <span>reliable</span> and <span>dependable</span> and often seek new responsibilities within a wide range of employment areas. I have an <span>active</span> and dynamic approach to work and getting things done.</p>
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