import Header from "../components/Header";
import Img from "../assets/personal.jpg";
import styles from "../styles/profile.module.css"

function Profile(){
    return(
        <section>
            <Header />
            <section className={styles.imgDesc}>
                <img src={Img}/>
                <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities.</p>
            </section>
            <section className={styles.social}>
                <div>
                    
                </div>
            </section>
        </section>
    )
} 

export default Profile;