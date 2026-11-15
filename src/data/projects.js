import { projectImages } from '../components/Variables/projectImages.jsx';
import bookSearch from '../assets/projects/MERN-Book-Search.png';

// Keep project copy and links together. Omit liveUrl when no current demo is available.
export const projects = [
  {
    id: 'msbi-research', title: 'MSBI Sequencing Pipeline', category: 'Bioinformatics research', recent: true,
    description: 'A Nextflow workflow for sequencing data retrieval, quality control, alignment, variant calling, and annotation, with Python scripts for identifying sample-specific variants.',
    tags: ['Nextflow', 'Python', 'SLURM'], visual: 'pipeline',
    sourceUrl: 'https://github.com/reasonablep/MSBI-research-project',
  },
  {
    id: 'single-cell', title: 'Single-Cell Data Preparation', category: 'Collaborative coursework', recent: true,
    description: 'A Python workflow that loads 10x gene-expression data, validates cell identifiers, aligns cell metadata, and exports an AnnData dataset for pancreatic cancer analysis.',
    tags: ['Python', 'Scanpy', 'Pandas'], visual: 'single-cell',
    sourceUrl: 'https://github.com/reasonablep/cs223-peter-luis-brandon/tree/main/term-project',
  },
  {
    id: 'book-search', title: 'MERN Book Search', category: 'Full-stack application', recent: true,
    description: 'A Google-powered book search with user accounts and saved reading lists, refactored from a REST API to GraphQL and Apollo Server.',
    tags: ['React', 'GraphQL', 'MongoDB'], image: bookSearch,
    sourceUrl: 'https://github.com/reasonablep/p21-MERN-book-search',
  },
  {
    id: 'password-generator', title: 'JS Password Generator', category: 'Web development',
    description: 'A browser-based password generator built with JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'], image: projectImages.project1,
    liveUrl: 'https://reasonablep.github.io/password-generator-challenge-1/',
  },
  {
    id: 'weather', title: 'Weather Dashboard', category: 'Web development',
    description: 'A weather dashboard that retrieves forecast information from a weather API.',
    tags: ['JavaScript', 'APIs'], image: projectImages.project2,
    sourceUrl: 'https://github.com/reasonablep/weather-dash-challenge',
    liveUrl: 'https://reasonablep.github.io/weather-dash-challenge/',
  },
  {
    id: 'quiz', title: 'JavaScript Quiz Game', category: 'Web development',
    description: 'An interactive browser quiz for practicing JavaScript knowledge.',
    tags: ['JavaScript', 'HTML', 'CSS'], image: projectImages.project3,
    sourceUrl: 'https://github.com/reasonablep/JavaScript_code_quiz_p4',
    liveUrl: 'https://reasonablep.github.io/JavaScript_code_quiz_p4/',
  },
  {
    id: 'trailerfone', title: 'TrailerFone', category: 'Collaborative web project',
    description: 'A movie-trailer discovery site built as a collaborative web development project.',
    tags: ['JavaScript', 'APIs'], image: projectImages.project4,
    liveUrl: 'https://tonymagr.github.io/project1-trailer-phone-imyou/',
  },
  {
    id: 'techie-thoughts', title: 'Techie Thoughts', category: 'Full-stack application',
    description: 'A technology blog organized with a model–view–controller architecture.',
    tags: ['MVC', 'JavaScript'], image: projectImages.project5,
    sourceUrl: 'https://github.com/reasonablep/p11-techie-thoughts',
    liveUrl: 'https://p14-techie-thoughts-ea6c22c69d49.herokuapp.com/login',
  },
  {
    id: 'level-up', title: 'Level Up Lounge', category: 'Collaborative web project',
    description: 'A gaming-focused web application created through collaborative full-stack development.',
    tags: ['Full-stack', 'JavaScript'], image: projectImages.project6,
    liveUrl: 'https://leveluplounge-4438f7fc5ebe.herokuapp.com/',
  },
];
