import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import profilepic from './assets/profilepic.jpg';
import './App.css';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home banner={"PLAY PLAY PLAY"} />
              {location.pathname === '/' && <About profilepic={profilepic} />}
            </div>
          }
        />
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
          element={<Contact contactbanner={"Contact Me"} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;