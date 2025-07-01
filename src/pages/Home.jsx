import {Link} from 'react-router-dom';

import heroImg from '../assets/person.jpg';
import '../page-css/Home.css';

const Home = () => {
  return (
    <div id="home-container">
      <div id="data-container">
        <h2>Welcome,</h2>
        <h1>Hi, I'm John, <br />
          <span>A Web Developer</span>
        </h1>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestiae alias incidunt sit corporis aliquid excepturi omnis repellat autem? Cupiditate qui iusto cum itaque voluptatum, ab ut unde ad praesentium.
        Dignissimos explicabo corrupti facilis mollitia saepe esse, rerum a, unde debitis neque possimus exercitationem laborum impedit consequatur perferendis porro suscipit, nemo numquam amet. Necessitatibus inventore, quidem corrupti iure atque cupiditate?</h3>
        <div id="hero-btns">
          <button className="hire-btn"><Link to='/contact' className='link'>Hire Me</Link></button>
          <button className="projects-btn"><Link to='/projects' className='link'>See My Projects</Link></button>
        </div>
      </div>
      <div id="profile-image">
        <img src={heroImg} alt="image-of-myself" />
      </div>
    </div>
  )
}

export default Home;