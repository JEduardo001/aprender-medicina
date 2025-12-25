import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import { medicalSections, beginnerContent } from '../data/index';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__orb hero__orb--1"></div>
                    <div className="hero__orb hero__orb--2"></div>
                    <div className="hero__orb hero__orb--3"></div>
                    <div className="hero__grid"></div>
                </div>

                <div className="hero__content container">
                    <div className="hero__badge animate-fade-in">
                        <span className="hero__badge-icon">✨</span>
                        <span>Tu viaje de aprendizaje comienza aquí</span>
                    </div>

                    <h1 className="hero__title animate-fade-in-up">
                        Aprende <span className="text-gradient">Medicina</span>
                        <br />de forma Visual
                    </h1>

                    <p className="hero__description animate-fade-in-up stagger-2">
                        Explora el fascinante mundo del cuerpo humano a través de
                        ilustraciones interactivas y contenido educativo diseñado
                        para hacer el aprendizaje más accesible y comprensible.
                    </p>

                    <div className="hero__actions animate-fade-in-up stagger-3">
                        <Link to="/principiantes" className="hero__btn hero__btn--primary">
                            <span>🎓</span>
                            <span>Comenzar desde cero</span>
                        </Link>
                        <a href="#sistemas" className="hero__btn hero__btn--secondary">
                            <span>🔬</span>
                            <span>Explorar sistemas</span>
                        </a>
                    </div>

                    <div className="hero__stats animate-fade-in-up stagger-4">
                        <div className="hero__stat">
                            <span className="hero__stat-value">7</span>
                            <span className="hero__stat-label">Sistemas del cuerpo</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">28+</span>
                            <span className="hero__stat-label">Datos curiosos</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">100%</span>
                            <span className="hero__stat-label">Visual e interactivo</span>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Desplázate para explorar</span>
                    <div className="hero__scroll-arrow">↓</div>
                </div>
            </section>

            {/* Beginners Section */}
            <section className="beginners-preview container">
                <div className="beginners-preview__content">
                    <span className="beginners-preview__tag">📚 Para Principiantes</span>
                    <h2 className="beginners-preview__title">
                        ¿Nuevo en medicina?
                    </h2>
                    <p className="beginners-preview__description">
                        {beginnerContent.intro}
                    </p>
                    <Link to="/principiantes" className="beginners-preview__btn">
                        <span>Empezar el curso básico</span>
                        <span>→</span>
                    </Link>
                </div>

                <div className="beginners-preview__cards">
                    {beginnerContent.lessons.slice(0, 3).map((lesson, index) => (
                        <div
                            key={lesson.id}
                            className="beginners-preview__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="beginners-preview__card-icon">{lesson.icon}</span>
                            <h4 className="beginners-preview__card-title">{lesson.title}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Systems Section */}
            <section id="sistemas" className="systems container">
                <div className="systems__header">
                    <span className="systems__tag">🫀 Sistemas del Cuerpo</span>
                    <h2 className="systems__title">
                        Explora los <span className="text-gradient">Sistemas</span> del Cuerpo Humano
                    </h2>
                    <p className="systems__description">
                        Selecciona un sistema para aprender sobre su anatomía, función,
                        y datos fascinantes que te sorprenderán.
                    </p>
                </div>

                <div className="systems__grid">
                    {medicalSections.map((section, index) => (
                        <SectionCard key={section.id} section={section} index={index} />
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features container">
                <div className="features__header">
                    <h2 className="features__title">
                        ¿Por qué aprender con <span className="text-gradient-accent">MediLearn</span>?
                    </h2>
                </div>

                <div className="features__grid">
                    <div className="feature-card">
                        <div className="feature-card__icon">🎨</div>
                        <h3 className="feature-card__title">Visual e Interactivo</h3>
                        <p className="feature-card__description">
                            Ilustraciones detalladas que hacen el aprendizaje más atractivo y memorable.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card__icon">🧠</div>
                        <h3 className="feature-card__title">Fácil de Entender</h3>
                        <p className="feature-card__description">
                            Contenido explicado de forma simple, sin términos complicados innecesarios.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card__icon">📱</div>
                        <h3 className="feature-card__title">Accesible en Cualquier Lugar</h3>
                        <p className="feature-card__description">
                            Diseño responsivo que funciona perfectamente en móvil, tablet y escritorio.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card__icon">💡</div>
                        <h3 className="feature-card__title">Datos Curiosos</h3>
                        <p className="feature-card__description">
                            Aprende hechos fascinantes que hacen la medicina más interesante.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta__background"></div>
                <div className="cta__content container">
                    <h2 className="cta__title">
                        ¿Listo para comenzar tu viaje?
                    </h2>
                    <p className="cta__description">
                        El cuerpo humano es fascinante. Cada sistema tiene una historia que contar.
                    </p>
                    <Link to="/principiantes" className="cta__btn">
                        <span>🚀</span>
                        <span>Comenzar ahora</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
