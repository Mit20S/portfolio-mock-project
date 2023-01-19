import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import App from './App';
import Education from './components/Education';
import Professional from './components/Professional';
import Project from './components/Project';
import Profile from './components/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element = {<App />}/>
		<Route path="/profile" element = {<Profile />}/>
        <Route path="/education" element = {<Education/>}/>
        <Route path="/professional" element = {<Professional/>}/>
        <Route path="/Project" element = {<Project/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);


