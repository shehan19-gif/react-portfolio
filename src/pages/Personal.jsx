import '../page-css/Personal.css';
import person from '../assets/person.jpg';
import Download from './Download';

const Personal = () => {
  return (
    <div id='personal-main-container'>
        <div id='details-section'>
            
            <section className="sec-1">
                <h2>Personal Details</h2>
                <div id="personal-data">
                    <div id="hero-img">
                        <img src={person} alt="myself-image" />
                    </div>
                    <div id="hero-data">
                        <h3>Web Developer</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='t-head'>Residence:</td>
                                    <td>Sri Lankan</td>
                                </tr>
                                <tr>
                                    <td className='t-head'>Freelance:</td>
                                    <td>Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="hero-social-contacts">
                        <div id="twiiter">
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </div>
                        <div id="facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div id="insta">
                            <i className="fa-brands fa-square-instagram"></i>
                        </div>
                        <div id="linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                        <div id="yt">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="sec-2">
                <h2>Main Skills</h2>
                <div id="tech-languages">
                    <div id="html-lang">
                        <label htmlFor="html">HTML</label><br />
                        <progress id='html' value={100} max={100}></progress>
                    </div>
                    <div id="css-lang">
                        <label htmlFor="css">CSS</label><br />
                        <progress id='css' value={100} max={100}></progress>
                    </div>
                    <div id="js-lang">
                        <label htmlFor="js">Javascript</label><br />
                        <progress id='js' value={100} max={100}></progress>
                    </div>
                    <div id="php-lang">
                        <label htmlFor="php">PHP</label><br />
                        <progress id='php' value={100} max={100}></progress>
                    </div>
                    <div id="mern-stack">
                        <label htmlFor="mern">MERN Stack</label><br />
                        <progress id='mern' value={100} max={100}></progress>
                    </div>
                </div>
            </section>
            
            <section className="sec-3">
                <h2>Languages</h2>
                <div id="languages">
                    <div id="sinhala-lang">
                        <label htmlFor="sinhala">Sinhala</label><br />
                        <progress id='sinhala' value={100} max={100}></progress>
                    </div>
                    <div id="english-lang">
                        <label htmlFor="english">English</label><br />
                        <progress id='english' value={100} max={100}></progress>
                    </div>
                </div>
            </section>
            
            <section className="sec-4">
                <h2>Other Skills</h2>
                <ul id='other-skills'>
                    <li>Bootstrap</li>
                    <li>SCSS</li>
                    <li>Version Control (git)</li>
                    <li>Graphic Design</li>
                </ul>
            </section>
            
            <section className="sec-5">
                <Download />
            </section>
        </div>
    </div>
  )
}

export default Personal;