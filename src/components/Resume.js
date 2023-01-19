import Header from "./Header"
import Footer from "./Footer"
import Img from "../assets/personal.jpg"

import variables from "../styles/variables.module.css";
import styles from "../styles/resume.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetData from "./GetData";

function Resume(){
    // Declaring the constant url
    const profileUrl = "http://localhost:3000/profile";
    const educationUrl = "http://localhost:3000/education";
    const projectUrl = "http://localhost:3000/projects";
    const professionalUrl = "http://localhost:3000/professional";

    const [profileObj, setprofileObj] = useState({});
    const [educationObj, seteducationObj] = useState({});
    const [projectObj, setprojectObj] = useState([]);
    const [professionalObj, setprofessionalObj] = useState({});

    GetData(profileUrl, profileObj, setprofileObj);
    GetData(educationUrl, educationObj, seteducationObj);
    GetData(projectUrl, projectObj, setprojectObj);
    GetData(professionalUrl, professionalObj, setprofessionalObj);

    return(
        <>
            <Header />
            <div className={styles.mainHeading}>
               <h1 className={styles.mainTitle}>RESUME</h1>
            </div>

            <main className={styles.resume}>
                <div className={styles.nameAndImg}>
                    <div>
                        <h1>{profileObj.name}</h1>
                        <p>{profileObj.deloitte_mail}</p>
                        <p>{profileObj.phone}</p>
                        <p>{professionalObj.summary}</p>
                    </div>
                    <div>
                        <img src={Img} alt="personal" />
                    </div>

                </div>
                <hr />


                <section>
                    <div>
                        <div className={styles.projects}>
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
                            {professionalObj.skills}
                            {/* {professionalObj.experience.map((item,index) =>
                                <div key={index} className={styles.expCard}>
                                    <h2>{item.company_name}</h2>
                                    <p><b>Role: </b>{item.role}</p>
                                    <span><b>Type: </b>{item.job_type} &nbsp; &nbsp;</span>
                                    <span>| &nbsp; <b>Start: </b>{item.start_date} &nbsp; &nbsp;</span>
                                    <span>| &nbsp; <b>Duration: </b>{item.duration}</span>
                                    <hr></hr>
                                    <p>{item.details}</p>
                                </div>
                            )} */}
                        </div>
                        {/* Projects and Profession */}
                    </div>
                    <div>
                        {/* Education and Skills */}
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