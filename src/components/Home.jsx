import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero container">
      <p className="eyebrow">Peter Martinez / Portfolio</p>
      <h1>Curiosity, meet<br /><em>possibility.</em></h1>
      <div className="hero-bottom">
        <p>Exploring the space between biology, data, and the web. Learning by building, one project at a time.</p>
        <Link className="button" to="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
