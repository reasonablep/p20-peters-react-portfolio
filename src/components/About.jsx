import profilepic from '../assets/profilepic.jpg';

export default function About() {
  return (
    <section className="about-section container" aria-labelledby="about-title">
      <div className="portrait-wrap"><img className="profilepic" src={profilepic} alt="Peter Martinez" /></div>
      <div className="bio">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Science background.<br />Builder’s mindset.</h2>
        <p>I’m Peter, a graduate student in the Master of Science in Bioinformatics program at San José State University. I earned my bachelor’s degree in Biochemistry and Molecular Biology from UC Santa Cruz in 2023.</p>
        <p>My work brings together bioinformatics research and full-stack web development. I bring over 20 years of experience across AI model evaluation, telecommunications, retail, fitness, and event planning.</p>
        <ul className="tags" aria-label="Areas of focus"><li>Bioinformatics</li><li>Full-stack development</li><li>AI model evaluation</li></ul>
      </div>
    </section>
  );
}
