import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="site-header container">
      <Link className="wordmark" to="/" aria-label="Peter Martinez home">pm<span>.</span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </header>
  );
}
