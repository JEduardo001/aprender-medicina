import { useParams, Link, useNavigate } from 'react-router-dom';
import { medicalSections } from '../data/index';
import './SectionDetail.css';

function SectionDetail() {
    const { sectionId } = useParams();
    const navigate = useNavigate();

    const section = medicalSections.find(s => s.id === sectionId);

    if (!section) {
        return (
            <div className="section-not-found container">
                <h1>Sección no encontrada</h1>
                <p>La sección que buscas no existe.</p>
                <Link to="/" className="section-not-found__btn">Volver al inicio</Link>
            </div>
        );
    }

    const currentIndex = medicalSections.findIndex(s => s.id === sectionId);
    const prevSection = medicalSections[currentIndex - 1];
    const nextSection = medicalSections[currentIndex + 1];

    return (
        <div className="section-detail" style={{ '--section-color': section.color }}>
            {/* Hero */}
            <section className="detail-hero">
                <div className="detail-hero__background">
                    <div className="detail-hero__gradient" style={{ background: section.gradient }}></div>
                    <div className="detail-hero__overlay"></div>
                </div>

                <div className="detail-hero__content container">
                    <Link to="/" className="detail-hero__back">
                        <span>←</span>
                        <span>Volver al inicio</span>
                    </Link>

                    <div className="detail-hero__main">
                        <div className="detail-hero__text">
                            <span className="detail-hero__emoji">{section.emoji}</span>
                            <h1 className="detail-hero__title">{section.title}</h1>
                            <p className="detail-hero__subtitle">{section.subtitle}</p>
                            <p className="detail-hero__description">{section.description}</p>

                            {section.examQuestions && (
                                <Link to={`/examen/${sectionId}`} className="detail-hero__exam-btn">
                                    📝 Tomar Examen
                                </Link>
                            )}
                        </div>

                        {section.image && (
                            <div className="detail-hero__image-container">
                                <img src={`/src/assets/${section.image}`} alt={section.title} className="detail-hero__image" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* YouTube Video */}
            {section.youtubeVideo && (
                <section className="video-section container">
                    <h2 className="video-section__title">
                        <span className="video-section__icon">🎬</span>
                        Video Educativo
                    </h2>
                    <div className="video-section__wrapper">
                        <iframe
                            className="video-section__iframe"
                            src={section.youtubeVideo}
                            title={`Video sobre ${section.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            )}

            {/* Detailed Sections */}
            {section.sections && section.sections.length > 0 && (
                <section className="detailed-content container">
                    <h2 className="detailed-content__title">📖 Contenido Detallado</h2>

                    {section.sections.map((sec, index) => (
                        <div key={index} className="content-section" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="content-section__title">{sec.title}</h3>
                            <p className="content-section__intro">{sec.content}</p>

                            <div className="content-section__subsections">
                                {sec.subsections.map((sub, subIndex) => (
                                    <div key={subIndex} className="subsection-card">
                                        <h4 className="subsection-card__name">
                                            <span className="subsection-card__dot" style={{ background: section.color }}></span>
                                            {sub.name}
                                        </h4>
                                        <p className="subsection-card__details">{sub.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Key Facts */}
            <section className="key-facts container">
                <h2 className="key-facts__title">
                    <span className="key-facts__icon">💡</span>
                    Datos Fascinantes
                </h2>
                <div className="key-facts__grid">
                    {section.facts.map((fact, index) => (
                        <div key={index} className="fact-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <span className="fact-card__number">{String(index + 1).padStart(2, '0')}</span>
                            <p className="fact-card__text">{fact}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Parts */}
            <section className="key-parts container">
                <h2 className="key-parts__title">
                    <span className="key-parts__icon">🔬</span>
                    Componentes Principales
                </h2>
                <div className="key-parts__grid">
                    {section.keyParts.map((part, index) => (
                        <div key={index} className="part-card" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="part-card__header">
                                <span className="part-card__bullet" style={{ background: section.color }}></span>
                                <h3 className="part-card__name">{part.name}</h3>
                            </div>
                            <p className="part-card__function">{part.function}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Diseases */}
            {section.diseases && (
                <section className="diseases container">
                    <h2 className="diseases__title">
                        <span className="diseases__icon">⚠️</span>
                        Enfermedades Comunes
                    </h2>
                    <div className="diseases__grid">
                        {section.diseases.map((disease, index) => (
                            <div key={index} className="disease-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="disease-card__name">{disease.name}</h3>
                                <p className="disease-card__description">{disease.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Take Exam CTA */}
            {section.examQuestions && (
                <section className="exam-cta container">
                    <div className="exam-cta__card">
                        <span className="exam-cta__icon">📝</span>
                        <h2 className="exam-cta__title">Pon a prueba tus conocimientos</h2>
                        <p className="exam-cta__description">
                            Responde {section.examQuestions.length} preguntas sobre el {section.title.toLowerCase()}
                        </p>
                        <Link to={`/examen/${sectionId}`} className="exam-cta__btn">
                            Comenzar Examen
                        </Link>
                    </div>
                </section>
            )}

            {/* Navigation */}
            <section className="section-nav container">
                <h2 className="section-nav__title">Continúa Explorando</h2>
                <div className="section-nav__buttons">
                    {prevSection && (
                        <button onClick={() => navigate(`/seccion/${prevSection.id}`)} className="section-nav__btn section-nav__btn--prev">
                            <span className="section-nav__btn-arrow">←</span>
                            <span className="section-nav__btn-content">
                                <span className="section-nav__btn-label">Anterior</span>
                                <span className="section-nav__btn-title">
                                    <span>{prevSection.emoji}</span>
                                    <span>{prevSection.title}</span>
                                </span>
                            </span>
                        </button>
                    )}
                    {nextSection && (
                        <button onClick={() => navigate(`/seccion/${nextSection.id}`)} className="section-nav__btn section-nav__btn--next">
                            <span className="section-nav__btn-content">
                                <span className="section-nav__btn-label">Siguiente</span>
                                <span className="section-nav__btn-title">
                                    <span>{nextSection.emoji}</span>
                                    <span>{nextSection.title}</span>
                                </span>
                            </span>
                            <span className="section-nav__btn-arrow">→</span>
                        </button>
                    )}
                </div>
                <div className="section-nav__all">
                    <Link to="/#sistemas" className="section-nav__all-btn">Ver todos los sistemas</Link>
                </div>
            </section>
        </div>
    );
}

export default SectionDetail;
