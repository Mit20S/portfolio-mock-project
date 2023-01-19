import variables from "../styles/variables.module.css";
// import useStyles from "../styles/app.module.css";
import styles from "../styles/education.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Education(){
    // Declaring the constant url
    const url = "http://localhost:3000/education/";

    // Declaring Education array
    const [EducationArray, setEducation] = useState([]);
    
    useEffect(()=>{getEducation()}, [EducationArray]);

    // Defining getEducation Function
    function getEducation(){
         
        axios.get(url).then(resData => {
            setEducation(resData.data);
        })
    }

    // Iterating the Education Array
    let result = EducationArray.map((item,index)=>
    <div key={index} className={styles.eduBlock}>
        <p className={styles.subTitle}>Course: {item.course}</p>
        <p className={styles.bodyContent}>Institution: {item.institution}</p>
        <p className={styles.bodyContent}>Location: {item.location}</p>
        <p className={styles.bodyContent}>Year of Passing: {item.pass_year}</p>
    </div>)

    return(
        <>
            <div className={styles.mainHeading}>
               <h1 className={styles.mainTitle}>EDUCATION</h1>
            </div>
            {/* <hr/> */}
            <div className={styles.mainBlock}>
                {result}
            </div>
        </>
    );
}
export default Education;




