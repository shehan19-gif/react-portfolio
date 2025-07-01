import { Link, useLocation } from 'react-router-dom';
import '../page-css/Navigation.css';
import { useEffect, useState } from 'react';

const Navigation = () => {

  // active tab
  const location = useLocation();
  const currentPage = location.pathname;

  // dark-mode (change theme)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  const handlePageColor = () => {
    setTheme(preTheme => (preTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div id="navigation-main-container">
      <div id="nav-bar">
        <div id="dark-mode">
          <button><i className="fa-solid fa-yin-yang" onClick={handlePageColor}></i></button>
        </div>
        <div id="nav-links">
          <div className="nav-link nav-link-1">
            <Link to='/' className={currentPage === '/' ? 'active' : 'inactive'}><i className="fa-solid fa-igloo"></i></Link>
          </div>
          <div className="nav-link nav-link-2">
            <Link to='/qualification' className={currentPage === '/qualification' ? 'active' : 'inactive'}><i className="fa-solid fa-user-graduate"></i></Link>
          </div>
          <div className="nav-link nav-link-3">
            <Link to='/experience' className={currentPage === '/experience' ? 'active' : 'inactive'}><i className="fa-solid fa-user-tie"></i></Link>
          </div>
          <div className="nav-link nav-link-4">
            <Link to='/projects' className={currentPage === '/projects' ? 'active' : 'inactive'}><i className="fa-solid fa-list-check"></i></Link>
          </div>
          <div className="nav-link nav-link-5">
            <Link to='/contact' className={currentPage === '/contact' ? 'active' : 'inactive'}><i className="fa-solid fa-address-book"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;