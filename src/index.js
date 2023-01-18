import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Education from './components/Education';
import Professional from './components/Professional';
import Project from './components/Project';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>

      <Routes>
        <Route path="/education" element = {<Education/>}/>
        <Route path="/professional" element = {<Professional/>}/>
        <Route path="/Project" element = {<Project/>}/>\
        

      </Routes>

      <Footer/>
    </Router>
  </React.StrictMode>
);


