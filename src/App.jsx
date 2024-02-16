import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import OneCounter from './components/Onecount.jsx'
import TenCounter from './components/Tencount.jsx'
import Exponential from './components/Expocount.jsx'
import profilepic from './assets/profilepic.jpg'
import './App.css'


function App() {

  return (
    <Router>
      <div>
      <div id='about'>
    <Nav/>
    <Route path='/about' element={<About className={"header"}
      banner={"PLAY PLAY PLAY"}
      profilepic={profilepic}
      />}/>
      </div>
      <div id='projects'>
        <Route path='projects' element={<Projects projects={"Portfolio Projects"}
        eachProject = {
          {
            project1: "JS Password Generator", 
            project2: "Weather API Retrieval",
            project3: "JavaScript Quiz Game",
            project4: "TrailerFone Trailer Service",
            project5: "MVC Techie Thoughts Blog Site",
            project6: "Level Up Lounge",
          }} />} />
        </div>

      <div id="contact">
        <Route path='contact' element={<Contact contactbanner={"Contact Me:"} />}/>
  
      </div>

      <div id="math-generators">
        <h3>
        Just for fun: Random Math Generators</h3>
          <OneCounter />
      
        <TenCounter />
          <Exponential />
      </div>
 </div>
    </Router>
  );
}

export default App
