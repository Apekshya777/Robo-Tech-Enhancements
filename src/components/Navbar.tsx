import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon">🤖</span>
                    <span className="logo-text">RoboTech</span>
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
                        About
                    </Link>
                    <Link to="/" className="nav-link">Courses</Link>
                    <Link to="/" className="nav-link">Contact</Link>
                    <Link to="/login-demo" className="nav-link">Login</Link>
                </div>

                <button className="navbar-cta btn btn-primary">
                    Get Started <span>→</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
