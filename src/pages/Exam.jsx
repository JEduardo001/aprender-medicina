import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { medicalSections } from '../data/index';
import './Exam.css';

function Exam() {
    const { sectionId } = useParams();
    const navigate = useNavigate();

    const section = medicalSections.find(s => s.id === sectionId);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [examFinished, setExamFinished] = useState(false);

    useEffect(() => {
        // Reset exam when section changes
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setAnswers([]);
        setExamFinished(false);
    }, [sectionId]);

    if (!section || !section.examQuestions) {
        return (
            <div className="exam-not-found container">
                <h1>Examen no disponible</h1>
                <p>Este sistema aún no tiene examen disponible.</p>
                <Link to="/" className="exam-not-found__btn">Volver al inicio</Link>
            </div>
        );
    }

    const questions = section.examQuestions;
    const question = questions[currentQuestion];

    const handleSelectAnswer = (index) => {
        if (showResult) return;
        setSelectedAnswer(index);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === null) return;

        const isCorrect = selectedAnswer === question.correct;
        if (isCorrect) setScore(score + 1);

        setAnswers([...answers, { questionIndex: currentQuestion, selected: selectedAnswer, correct: question.correct, isCorrect }]);
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setExamFinished(true);
        }
    };

    const handleRestartExam = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setAnswers([]);
        setExamFinished(false);
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return { emoji: '🏆', message: '¡Perfecto! ¡Eres un experto!' };
        if (percentage >= 80) return { emoji: '🌟', message: '¡Excelente! Muy buen conocimiento.' };
        if (percentage >= 60) return { emoji: '👍', message: '¡Bien! Sigue estudiando.' };
        if (percentage >= 40) return { emoji: '📚', message: 'Necesitas repasar un poco más.' };
        return { emoji: '💪', message: 'No te rindas, vuelve a intentarlo.' };
    };

    if (examFinished) {
        const { emoji, message } = getScoreMessage();
        return (
            <div className="exam" style={{ '--section-color': section.color }}>
                <div className="exam-result container">
                    <div className="exam-result__card">
                        <span className="exam-result__emoji">{emoji}</span>
                        <h1 className="exam-result__title">Examen Completado</h1>
                        <div className="exam-result__score">
                            <span className="exam-result__score-value">{score}</span>
                            <span className="exam-result__score-total">/ {questions.length}</span>
                        </div>
                        <p className="exam-result__message">{message}</p>

                        <div className="exam-result__summary">
                            <h3>Resumen de Respuestas</h3>
                            <div className="exam-result__answers">
                                {answers.map((answer, index) => (
                                    <div key={index} className={`exam-result__answer ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                                        <span className="exam-result__answer-num">{index + 1}</span>
                                        <span className="exam-result__answer-icon">{answer.isCorrect ? '✓' : '✗'}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="exam-result__actions">
                            <button onClick={handleRestartExam} className="exam-result__btn exam-result__btn--restart">
                                🔄 Repetir Examen
                            </button>
                            <Link to={`/seccion/${sectionId}`} className="exam-result__btn exam-result__btn--study">
                                📖 Estudiar Más
                            </Link>
                            <Link to="/" className="exam-result__btn exam-result__btn--home">
                                🏠 Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="exam" style={{ '--section-color': section.color }}>
            <div className="exam-header">
                <div className="exam-header__container container">
                    <Link to={`/seccion/${sectionId}`} className="exam-header__back">
                        ← Volver a {section.title}
                    </Link>
                    <div className="exam-header__info">
                        <span className="exam-header__emoji">{section.emoji}</span>
                        <h1 className="exam-header__title">Examen: {section.title}</h1>
                    </div>
                </div>
            </div>

            <div className="exam-content container">
                {/* Progress bar */}
                <div className="exam-progress">
                    <div className="exam-progress__bar">
                        <div
                            className="exam-progress__fill"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <span className="exam-progress__text">
                        Pregunta {currentQuestion + 1} de {questions.length}
                    </span>
                </div>

                {/* Question card */}
                <div className="question-card">
                    <h2 className="question-card__question">{question.question}</h2>

                    <div className="question-card__options">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                className={`question-card__option ${selectedAnswer === index ? 'selected' : ''} ${showResult ? (index === question.correct ? 'correct' : selectedAnswer === index ? 'incorrect' : '') : ''
                                    }`}
                                onClick={() => handleSelectAnswer(index)}
                                disabled={showResult}
                            >
                                <span className="question-card__option-letter">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="question-card__option-text">{option}</span>
                                {showResult && index === question.correct && <span className="question-card__option-icon">✓</span>}
                                {showResult && selectedAnswer === index && index !== question.correct && <span className="question-card__option-icon">✗</span>}
                            </button>
                        ))}
                    </div>

                    {showResult && (
                        <div className={`question-card__explanation ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
                            <span className="question-card__explanation-icon">
                                {selectedAnswer === question.correct ? '✅' : '❌'}
                            </span>
                            <p>{question.explanation}</p>
                        </div>
                    )}

                    <div className="question-card__actions">
                        {!showResult ? (
                            <button
                                className="question-card__btn question-card__btn--check"
                                onClick={handleCheckAnswer}
                                disabled={selectedAnswer === null}
                            >
                                Verificar Respuesta
                            </button>
                        ) : (
                            <button
                                className="question-card__btn question-card__btn--next"
                                onClick={handleNextQuestion}
                            >
                                {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta →' : 'Ver Resultados'}
                            </button>
                        )}
                    </div>
                </div>

                {/* Score tracker */}
                <div className="exam-score">
                    <span className="exam-score__label">Puntaje actual:</span>
                    <span className="exam-score__value">{score} / {currentQuestion + (showResult ? 1 : 0)}</span>
                </div>
            </div>
        </div>
    );
}

export default Exam;
