import portfolioBG from './assets/p2Background.png'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import OneCounter from './components/onecount.jsx'
import TenCounter from './components/tencount.jsx'
import Exponential from './components/expocount.jsx'
import profilepic from './assets/profilepic.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav class="nav">
          <ul class="nav-elements">
            <h3>About</h3>
            <h3>Projects</h3>
            <h3>Contact Me</h3>
          </ul>
        </nav>
        <About header={"Peter's Portfolio"}
      banner={"PLAY PLAY PLAY"}
      profilepic={profilepic}
      />
          <img src={portfolioBG} className="portfolio-bg bg-image" alt="Portfolio Background"/>
      </div>

      <div>
        <Contact contactbanner={"Contact Me:"} />
      </div>

      <div>
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
