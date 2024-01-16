import portfolioBG from './assets/p2Background.png'
import profilepic from './assets/profilepic.jpg'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import OneCounter from './components/onecount.jsx'
import TenCounter from './components/tencount.jsx'
import Exponential from './components/expocount.jsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <About banner={"Peter's Portfolio"}
      title={"PLAY PLAY PLAY"}/>
          <img src={portfolioBG} className="portfolio-bg bg-image" alt="Portfolio Background"/>
          <img src={profilepic} className="profilepic"></img>
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
