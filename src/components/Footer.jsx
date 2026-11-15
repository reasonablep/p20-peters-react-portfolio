export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>© {new Date().getFullYear()} Peter Martinez</p>
      <p>Always learning. Always building.</p>
      <a href="https://github.com/reasonablep" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </footer>
  );
}
