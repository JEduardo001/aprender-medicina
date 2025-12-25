import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/principiantes', label: 'Principiantes' },
        { path: '/seccion/brain', label: 'Sistema Nervioso' },
        { path: '/seccion/heart', label: 'Sistema Cardiovascular' },
    ];

    const systems = [
        { path: '/seccion/lungs', label: 'Sistema Respiratorio' },
        { path: '/seccion/digestive', label: 'Sistema Digestivo' },
        { path: '/seccion/skeleton', label: 'Sistema Óseo' },
        { path: '/seccion/muscular', label: 'Sistema Muscular' },
    ];

    return (
        <footer className="footer">
            <div className="footer__glow"></div>

            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand Section */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">🩺</span>
                            <span className="footer__logo-text">MediLearn</span>
                        </div>
                        <p className="footer__description">
                            Tu plataforma interactiva para aprender medicina de forma visual y comprensible.
                            Explora los sistemas del cuerpo humano.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Twitter">
                                <span>𝕏</span>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <span>📸</span>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">
                                <span>▶️</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__links">
                        <h4 className="footer__title">Enlaces Rápidos</h4>
                        <ul className="footer__list">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Systems Links */}
                    <div className="footer__links">
                        <h4 className="footer__title">Sistemas</h4>
                        <ul className="footer__list">
                            {systems.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer__newsletter">
                        <h4 className="footer__title">Mantente Informado</h4>
                        <p className="footer__newsletter-text">
                            Recibe actualizaciones sobre nuevo contenido educativo.
                        </p>
                        <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="footer__input"
                            />
                            <button type="submit" className="footer__button">
                                📩
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} MediLearn. Contenido educativo para aprender medicina.
                    </p>
                    <p className="footer__disclaimer">
                        ⚠️ Esta aplicación es solo para fines educativos y no reemplaza el consejo médico profesional.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
