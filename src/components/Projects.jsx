import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="projects-page container" aria-labelledby="projects-title">
      <div className="page-heading">
        <p className="eyebrow">Research / Development / Exploration</p>
        <h1 id="projects-title">Things I’ve <em>built.</em></h1>
        <p>A selection of research workflows, full-stack applications, and experiments from my learning journey. Recent work comes first.</p>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            {project.image ? (
              <div className="project-image"><img src={project.image} alt={`${project.title} interface`} loading="lazy" /></div>
            ) : (
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                <span>{project.visual === 'pipeline' ? '01 / RESEARCH WORKFLOW' : '02 / SINGLE-CELL ANALYSIS'}</span>
                <strong>{project.visual === 'pipeline' ? <>From reads<br />to variants.</> : <>Small cells.<br />Rich data.</>}</strong>
                <span>{project.visual === 'pipeline' ? 'SEQUENCE → ALIGN → ANNOTATE' : '10x DATA → METADATA → AnnData'}</span>
              </div>
            )}
            <div className="project-body">
              <div className="project-meta"><p className="eyebrow">{project.category}</p>{project.recent && <span className="recent-badge">Recent work</span>}</div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <div className="project-links">
                {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
