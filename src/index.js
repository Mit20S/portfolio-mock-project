import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Project from './components/Project';


const routing = (

  <Router>
  {/* <Header/> */}
    
  
    <Routes>
      <Route path="/" element={ <App/>} />
      <Route path="/Project" element={ <Project/>} />
      
    </Routes>

    <Link to="/Project">Project</Link> | <Link to="/">App</Link>
    
    {/* <Footer/> */}
  </Router>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);


