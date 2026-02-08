import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-text">
                        <span className="logo-main">RoboTech</span>
                        <span className="logo-subtext">Learning Centre</span>
                    </div>
                </Link>

                <div className="navbar-links">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About Us
                    </Link>
                    <Link to="/" className="nav-link">Our Courses</Link>
                    <Link to="/" className="nav-link">Become Our Partner</Link>
                </div>

                <button className="navbar-cta btn btn-primary">
                    Contact Us <span>→</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
