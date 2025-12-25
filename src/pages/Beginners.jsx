import { Link } from 'react-router-dom';
import { beginnerContent, medicalSections } from '../data/index';
import './Beginners.css';

function Beginners() {
    return (
        <div className="beginners">
            {/* Hero Section */}
            <section className="beginners-hero">
                <div className="beginners-hero__background">
                    <div className="beginners-hero__orb"></div>
                </div>

                <div className="beginners-hero__content container">
                    <Link to="/" className="beginners-hero__back">
                        <span>←</span>
                        <span>Volver al inicio</span>
                    </Link>

                    <span className="beginners-hero__tag">📚 Curso para Principiantes</span>
                    <h1 className="beginners-hero__title">{beginnerContent.title}</h1>
                    <p className="beginners-hero__subtitle">{beginnerContent.subtitle}</p>
                    <p className="beginners-hero__description">{beginnerContent.intro}</p>
                </div>
            </section>

            {/* Lessons Section */}
            <section className="lessons container">
                <h2 className="lessons__title">Lecciones Básicas</h2>

                <div className="lessons__grid">
                    {beginnerContent.lessons.map((lesson, index) => (
                        <article
                            key={lesson.id}
                            className="lesson-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="lesson-card__header">
                                <span className="lesson-card__number">{String(lesson.id).padStart(2, '0')}</span>
                                <span className="lesson-card__icon">{lesson.icon}</span>
                            </div>

                            <h3 className="lesson-card__title">{lesson.title}</h3>
                            <p className="lesson-card__content">{lesson.content}</p>

                            <div className="lesson-card__points">
                                <h4 className="lesson-card__points-title">Puntos Clave:</h4>
                                <ul className="lesson-card__list">
                                    {lesson.keyPoints.map((point, pointIndex) => (
                                        <li key={pointIndex} className="lesson-card__list-item">
                                            <span className="lesson-card__bullet">✓</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Systems Overview */}
            <section className="systems-overview container">
                <div className="systems-overview__header">
                    <h2 className="systems-overview__title">Sistemas a Explorar</h2>
                    <p className="systems-overview__description">
                        Una vez que domines los conceptos básicos, podrás explorar cada sistema del cuerpo en detalle.
                    </p>
                </div>

                <div className="systems-overview__grid">
                    {medicalSections.map((section, index) => (
                        <Link
                            key={section.id}
                            to={`/seccion/${section.id}`}
                            className="system-mini-card"
                            style={{
                                '--card-color': section.color,
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <span className="system-mini-card__emoji">{section.emoji}</span>
                            <div className="system-mini-card__content">
                                <h4 className="system-mini-card__title">{section.title}</h4>
                                <p className="system-mini-card__subtitle">{section.subtitle}</p>
                            </div>
                            <span className="system-mini-card__arrow">→</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Tips Section */}
            <section className="tips container">
                <div className="tips__card">
                    <div className="tips__icon">💡</div>
                    <h3 className="tips__title">Consejos para Aprender Medicina</h3>
                    <div className="tips__grid">
                        <div className="tip">
                            <span className="tip__icon">📖</span>
                            <h4 className="tip__title">Lee Activamente</h4>
                            <p className="tip__text">No solo leas, haz notas y resúmenes de lo que aprendes.</p>
                        </div>
                        <div className="tip">
                            <span className="tip__icon">🔄</span>
                            <h4 className="tip__title">Repite y Practica</h4>
                            <p className="tip__text">La repetición es clave para memorizar términos médicos.</p>
                        </div>
                        <div className="tip">
                            <span className="tip__icon">🎨</span>
                            <h4 className="tip__title">Visualiza</h4>
                            <p className="tip__text">Usa imágenes y diagramas para entender mejor la anatomía.</p>
                        </div>
                        <div className="tip">
                            <span className="tip__icon">🔗</span>
                            <h4 className="tip__title">Conecta Conceptos</h4>
                            <p className="tip__text">Relaciona los sistemas entre sí para una comprensión completa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps CTA */}
            <section className="next-steps container">
                <h2 className="next-steps__title">¿Listo para profundizar?</h2>
                <p className="next-steps__description">
                    Elige un sistema del cuerpo y comienza a explorar en detalle.
                </p>
                <div className="next-steps__buttons">
                    <Link to="/seccion/brain" className="next-steps__btn next-steps__btn--primary">
                        <span>🧠</span>
                        <span>Sistema Nervioso</span>
                    </Link>
                    <Link to="/seccion/heart" className="next-steps__btn next-steps__btn--secondary">
                        <span>❤️</span>
                        <span>Sistema Cardiovascular</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Beginners;
