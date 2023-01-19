import Header from './Header';
import Footer from './Footer';

import{Link} from 'react-router-dom';
import styles from '../styles/project.module.css';
import axios from 'axios';
import { useState, useEffect } from "react";

import GetData from "./GetData";

function Project(){
    
    let url = "http://localhost:3000/projects";
    const [dataArray, setdataArray]  =  useState([]);
    
    GetData(url, dataArray, setdataArray);

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
        <Header />
        {/* <input type="button" value="Get data" onClick={getData_click}></input> */}
        <div>
            <p className={styles.heading}>PROJECTS</p>
        {result}
        </div>
        <Footer />
    </>
    );
}

export default Project;