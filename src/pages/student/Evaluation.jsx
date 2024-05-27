import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import NavbarStudent from './NavbarStudent';

const MyEvaluation = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            id: 1,
            question: 'Quelle est la capitale de la France ?',
            options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
            correctAnswer: 1,
        },
        {
            id: 2,
            question: 'Quel est le plus haut sommet du monde ?',
            options: ['Mont Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
            correctAnswer: 0,
        },
        {
            id: 3,
            question: 'Combien de pattes a une araignée ?',
            options: ['4', '6', '8', '10'],
            correctAnswer: 2,
        },
    ];

    const handleAnswerClick = (optionIndex) => {
        setSelectedAnswer(optionIndex);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer !== null) {
            const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedAnswer;
            if (isCorrect) {
                setCorrectAnswers(correctAnswers + 1);
            }

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
            } else {
                setShowScore(true);
            }
        }
    };

    const renderQuestion = () => {
        const question = questions[currentQuestionIndex];
        return (
            <div>
                <h3>Question {currentQuestionIndex + 1}</h3>
                <p>{question.question}</p>
                {question.options.map((option, optionIndex) => (
                    <Button
                        key={optionIndex}
                        variant={selectedAnswer === optionIndex ? 'primary' : 'outline-primary'}
                        onClick={() => handleAnswerClick(optionIndex)}
                    >
                        {option}
                    </Button>
                ))}
                <Button variant="success" onClick={handleSubmitAnswer}>Soumettre</Button>
            </div>
        );
    };

    const renderScore = () => {
        const score = (correctAnswers / questions.length) * 100;
        return (
            <Alert variant={score >= 50 ? 'success' : 'danger'}>
                Votre score est de {score.toFixed(2)}%.
            </Alert>
        );
    };

    return (
        <>
            <NavbarStudent />
            <Container>
                <h1>Évaluation QCM</h1>
                <Row>
                    <Col md={8}>
                        {showScore ? renderScore() : renderQuestion()}
                    </Col>
                    <Col md={4}>
                        <ProgressBar
                            now={(currentQuestionIndex + 1) / questions.length * 100}
                            label={`${currentQuestionIndex + 1} / ${questions.length}`}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MyEvaluation