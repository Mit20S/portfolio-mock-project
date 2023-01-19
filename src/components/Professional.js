import styles from "../styles/professional.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function Professional() {

  const url = "http://localhost:3000/professional/";

  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  axios.get(url).then( resData => 
  {
    setSummary(resData.data.summary);
    setSkills(resData.data.skills);
    setExperience(resData.data.experience);
  });

  let skills_result =  skills.map((item,index) =>
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
  );

  let experience_result =  experience.map((item,index) =>
    <div key={index} className={styles.expCard}>
      <h2>{item.company_name}</h2>
      <p><b>Role: </b>{item.role}</p>
      <span><b>Type: </b>{item.job_type} &nbsp; &nbsp;</span>
      <span>| &nbsp; <b>Start: </b>{item.start_date} &nbsp; &nbsp;</span>
      <span>| &nbsp; <b>Duration: </b>{item.duration}</span>
      <hr></hr>
      <p>{item.details}</p>
    </div>
  );

  return (
    <>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>PROFESSIONAL DETAILS</h1>
      </div>

      <div className={styles.mainDiv}>
        <div className={styles.summaryDiv}>
          <h1>Summary</h1>
          <hr></hr>
          <p>{summary}</p>
        </div>

        <div className={styles.skillDiv}>
          <h1>Skills</h1>
          <hr></hr>
          <div className={styles.skillSubDiv}>
            {skills_result}
          </div>
        </div>
      </div>
      
      <div className={styles.expDiv}>
        <h1>Experience</h1>
        <hr></hr>
        {experience_result}
      </div>
    </>
  );
}

export default Professional;