import { Link } from 'react-router-dom';
import './SectionCard.css';

function SectionCard({ section, index }) {
    return (
        <Link
            to={`/seccion/${section.id}`}
            className="section-card"
            style={{
                '--card-color': section.color,
                '--card-gradient': section.gradient,
                animationDelay: `${index * 0.1}s`
            }}
        >
            <div className="section-card__glow"></div>

            <div className="section-card__image-container">
                {section.image ? (
                    <img
                        src={`/src/assets/${section.image}`}
                        alt={section.title}
                        className="section-card__image"
                    />
                ) : (
                    <div className="section-card__emoji">{section.emoji}</div>
                )}
            </div>

            <div className="section-card__content">
                <span className="section-card__emoji-badge">{section.emoji}</span>
                <h3 className="section-card__title">{section.title}</h3>
                <p className="section-card__subtitle">{section.subtitle}</p>
                <p className="section-card__description">{section.shortDescription}</p>

                <div className="section-card__cta">
                    <span>Explorar</span>
                    <span className="section-card__arrow">→</span>
                </div>
            </div>

            <div className="section-card__shine"></div>
        </Link>
    );
}

export default SectionCard;
