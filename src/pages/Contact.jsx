import {Link} from 'react-router-dom';
import '../page-css/Contact.css';

const Contact = () => {
  return (
    <div id="contact-container">
      <div className="contact-details">
        <div id="contact-text">
          <h2>Contact Me</h2>
        </div>
        <div id="social-contacts">
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
        <div id="email-contact">
          <div id="email">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div id="contact-btn">
            <button><Link to="mailto:someone@example.com" className='email-link'>Send email</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;