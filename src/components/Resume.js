import Header from "./Header"
import Footer from "./Footer"
import Img from "../assets/personal.jpg"

import variables from "../styles/variables.module.css";
import styles from "../styles/resume.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetData from "./GetData";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function Resume(){
    // Declaring the constant url
    const profileUrl = "http://localhost:3000/profile";
    const educationUrl = "http://localhost:3000/education";
    const projectUrl = "http://localhost:3000/projects";
    const professionalUrl = "http://localhost:3000/professional";

    const [profileObj, setprofileObj] = useState({});
    const [educationObj, seteducationObj] = useState([]);
    const [projectObj, setprojectObj] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);

    axios.get(professionalUrl).then( resData => 
    {
        setSkills(resData.data.skills);
        setExperience(resData.data.experience);
    });

    GetData(profileUrl, profileObj, setprofileObj);
    GetData(educationUrl, educationObj, seteducationObj);
    GetData(projectUrl, projectObj, setprojectObj);

    return(
        <>
            <Header />
            <div className={styles.mainHeading}>
                <h1 className={styles.mainTitle}>RESUME</h1>
            </div>

            <main className={styles.resume}>
                <div className={styles.nameAndImg}>
                    <div className={styles.name}>
                        <h1>{profileObj.name}</h1>
                        <p>{profileObj.deloitte_mail}</p>
                        <p>{profileObj.phone}</p>
                        <br></br>
                        <p>{profileObj.summary}</p>
                    </div>
                    <div>
                        <img src={Img} alt="personal" />
                    </div>
                </div>

                <section className={styles.resumeSection}>
                    <div className={styles.projAndExp}>
                        <div className={styles.projects}>
                            <h2>Projects</h2>
                            {projectObj.map(( item, index)=>{
                                return(
                                    <div key={index} className={styles.card}>
                                        <p className={styles.title}>{item.project_name}</p>
                                        <p className={styles.technology}>Technology: {item.technology}</p>
                                        <p className={styles.description}>{item.description}</p> 
                                        <p className={styles.contribution}>{item.contribution}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={styles.professional}>
                            <h2>Experience</h2>
                            {experience.map((item,index) =>
                                <div key={index} className={styles.expCard}>
                                    <h2>{item.company_name}</h2>
                                    <p><b>Role: </b>{item.role}</p>
                                    <span><b>Type: </b>{item.job_type} &nbsp; &nbsp;</span>
                                    <span>| &nbsp; <b>Start: </b>{item.start_date} &nbsp; &nbsp;</span>
                                    <span>| &nbsp; <b>Duration: </b>{item.duration}</span>
                                    <hr></hr>
                                    <p>{item.details}</p>
                                </div>
                            )}
                        </div>
                        {/* Projects and Profession */}
                    </div>

                    <div className={styles.skillsAndEdu}>
                        <div className={styles.education}>
                        <h2>Education</h2>
                        {educationObj.map(( item, index)=>{
                        return(
                            <div key={index} className={styles.eduBlock}>
                            <p className={styles.subTitle}>Course: {item.course}</p>
                            <p className={styles.bodyContent}>Institution: {item.institution}</p>
                            <p className={styles.bodyContent}>Location: {item.location}</p>
                            <p className={styles.bodyContent}>Year of Passing: {item.pass_year}</p>
                            </div>
                            )
                        })}
                        </div>

                        <div className={styles.skills}>
                            <h2>Skills</h2>
                            {skills.map((item,index) =>
                            <div key={index} className={styles.skillCard}>
                                <p>{item.skill_name}</p>
                                <hr></hr>
                                <span>
                                    {[...Array(item.rating)].map((item,index) => 
                                    <BsStarFill key={index} className={styles.icon}></BsStarFill>
                                    )}
                                    {[...Array(5-item.rating)].map((item,index) => 
                                    <BsStar  key={index} className={styles.icon}></BsStar>
                                    )}
                                </span>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <div className={styles.downloadDiv}>
              <button>Download Pdf</button>
            </div>
            <Footer />
        </>
    );
}
export default Resume;