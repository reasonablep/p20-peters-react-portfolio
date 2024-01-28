import Nav from './components/nav.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
// import ContactForm from './components/contactForm.jsx'
import OneCounter from './components/onecount.jsx'
import TenCounter from './components/tencount.jsx'
import Exponential from './components/expocount.jsx'
import profilepic from './assets/profilepic.jpg'
import './App.css'


function App() {

  return (
    <>
      <div>
    <Nav/>
        <About className={"header"}
      banner={"PLAY PLAY PLAY"}
      profilepic={profilepic}
      />
      </div>
      <div id='projects'>
        <Projects projects={"Projects"}
        eachProject = {
          {
            project1: "Horiseon HTML/CSS Exercise",
            project2: "JS Random Password Generator", 
            project3: "Weather API Retrieval",
            project4: "JavaScript Quiz Game",
            project5: "API Day Scheduler",
            project6: "TrailerPhone Movie Trailer Service",
            project7: "Node Inquirer README Generator",
            project8: "Node Inquirer SVG Generator",
            project9: "Sequelize E-Commerce Back End",
            project10: "MVC Techie Thoughts Blog Site",
            project11: "Level Up Lounge",
            project12: "Git Gist REGEX URL Tutorial",
            project13: "Mongoose Social Media Back End",
            project14: "PWA Text Editor",
          }
        }
        ></Projects>

      </div>

      <div id="contact">
        <Contact contactbanner={"Contact Me:"} />
        {/* <ContactForm className = "button" theme={theme} color={"ochre"} /> */}
      </div>

      <div id="math-generators">
        <h3>
        Just for fun: Random Math Generators</h3>
        <button>
          <OneCounter />
        </button>
        <button>
        <TenCounter />
        </button>
        <button>
          <Exponential />
        </button>
      </div>
 
    </>
  )
}

export default App
