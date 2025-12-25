import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Inicio', icon: '🏠' },
        { path: '/principiantes', label: 'Principiantes', icon: '📚' },
        { path: '/#sistemas', label: 'Sistemas', icon: '🫀' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <span className="header__logo-icon">🩺</span>
                    <span className="header__logo-text">
                        <span className="header__logo-main">MediLearn</span>
                        <span className="header__logo-sub">Tu guía médica</span>
                    </span>
                </Link>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__nav-item">
                                <Link
                                    to={link.path}
                                    className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                                >
                                    <span className="header__nav-icon">{link.icon}</span>
                                    <span className="header__nav-label">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`header__burger ${isMobileMenuOpen ? 'header__burger--active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="header__overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}

export default Header;
