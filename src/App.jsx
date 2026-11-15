import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const page = pathname === '/projects' ? 'Projects' : pathname === '/contact' ? 'Contact' : 'Portfolio';
    document.title = `${page} · Peter Martinez`;
  }, [pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById('main-content').focus(); }}>Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<><Home /><About /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<><Home /><About /></>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
