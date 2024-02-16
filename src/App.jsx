import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import OneCounter from './components/Onecount';
import TenCounter from './components/Tencount';
import Exponential from './components/Expocount';
import profilepic from './assets/profilepic.jpg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home banner={"PLAY PLAY PLAY"} />} />
          <Route path="/about" element={<About profilepic={profilepic} />} />
          <Route
            path="/projects"
            element={
              <Projects
                projects={"Portfolio Projects"}
                eachProject={{
                  project1: "JS Password Generator",
                  project2: "Weather API Retrieval",
                  project3: "JavaScript Quiz Game",
                  project4: "TrailerFone Trailer Service",
                  project5: "MVC Techie Thoughts Blog Site",
                  project6: "Level Up Lounge",
                }}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact contactbanner={"Contact Me:"} />}
          />
        </Routes>

        <div id="math-generators">
          <h3>Just for fun: Random Math Generators</h3>
          <OneCounter />
          <TenCounter />
          <Exponential />
        </div>
      </div>
    </Router>
  );
}

export default App;