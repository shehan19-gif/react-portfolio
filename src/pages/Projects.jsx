import '../page-css/Projects.css';

import travelBlogImg from '../assets/projects/travel-web/travel-blog-merged.jpg';
import weatherAppImg from '../assets/projects/weather-app/weather-app.JPG';

const projectsDetails = [
  {
    id: 1,
    name: 'Travel Web',
    image: travelBlogImg,
    imageAltText: 'travel web image',
    progLanguages: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <i className="fa-brands fa-js"></i>,
      <i className="fa-brands fa-react"></i>
    ],
    link: ''
  },
  {
    id: 2,
    name: 'Weather App',
    image: weatherAppImg,
    imageAltText: 'wather app image',
    progLanguages: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <i className="fa-brands fa-js"></i>
    ],
    link: ''
  }
];

const Projects = () => {
  return (
    <div id='project-container'>
      {projectsDetails.map(project => (
        <>
        <div className="project-card" key={project.id}>
          <h2>{project.name}</h2>
          <div className="proj-img">
            <img src={project.image} alt={project.imageAltText} />
          </div>
          <div className="prog-langs">
            {project.progLanguages.map(lang => lang)}
          </div>
          <button>Browse</button>
        </div>
        <hr />
        </>
      ))}
    </div>
  )
}

export default Projects;