import{Link} from 'react-router-dom';
import styles from '../styles/project.module.css';
import axios from 'axios';
import { useState } from "react";


function Project(){
    
    const [dataArray, setdataArray]  =  useState([]);
    
    // function getData_click(){
        let url = "http://localhost:3000/projects";
        axios.get(url).then(resData => {
            console.log(resData.data);
            setdataArray(resData.data);
        }) 
    // }

    let result = dataArray.map((item,index) =>
    <div key={index} className={styles.card}>
        <p className={styles.title}>{item.project_name}</p>
        <p className={styles.technology}>Technology: {item.technology}</p>
        <p className={styles.description}>{item.description}</p> 
        <p className={styles.contribution}>{item.contribution}</p>
    </div>
    )

    return(
    <>
    {/* <input type="button" value="Get data" onClick={getData_click}></input> */}
    <div>
        <p className={styles.heading}>PROJECTS</p>
    {result}
    </div>
    </>
    );
}

export default Project;