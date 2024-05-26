import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { RiAddLine, RiDeleteBin6Line } from 'react-icons/ri';
import { GiRegeneration } from "react-icons/gi";

import axios from 'axios';

const ExamForm = () => {
    const [step, setStep] = useState(1);

    const [examTitle, setExamTitle] = useState('');
    const [examDescription, setExamDescription] = useState('');
    const [examDuration, setExamDuration] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [deadline, setDeadline] = useState('');
    const [numQuestions, setNumQuestions] = useState(0);
    const courses = [ // Sample list of courses
        { id: 1, title: 'Course A', description: 'Description for Course A' },
        { id: 2, title: 'Course B', description: 'Description for Course B' },
        { id: 3, title: 'Course C', description: 'Description for Course C' },
    ];


    const handleAddQuestion = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data[0].title)
            const suggestedQuestion = response.data;
            setQuestions([...questions, suggestedQuestion]);
        } catch (error) {
            console.error('Error fetching suggested question:', error);
        }
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleRemoveQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <div className=" d-flex align-items-center justify-content-center flex-column p-3">
                            <h1 className="fs-1" style={{ fontFamily: 'serif', fontWeight: 'bold', color: '#0e213d' }}>Créer un examen</h1>
                            <p style={{ color: '#0e213d' }}>Qu'aimeriez-vous créer aujourd'hui ?</p>
                        </div>
                        <Form.Group controlId="selectedCourse">
                            <Form.Label>Choisir le thème:</Form.Label>
                            <Form.Control as="select" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
                                <option value="">Vos cours</option>
                                {courses.map(course => (
                                    <option key={course.id} value={course.id}>{course.title}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="deadline">
                            <Form.Label>Deadline:</Form.Label>
                            <Form.Control type="datetime-local" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="numQuestions">
                            <Form.Label>Nombre des Questions de l'examen:</Form.Label>
                            <Form.Control type="number" value={numQuestions} onChange={(event) => setNumQuestions(event.target.value)} />
                        </Form.Group>
                        <div className="d-flex justify-content-end ">

                            <Button variant="primary" onClick={nextStep} className='mt-2'>
                                Quetions de l'évaluation
                            </Button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <div>
                            <Button variant="primary" onClick={handleAddQuestion}>
                                <RiAddLine /> Nouvelle question
                            </Button>
                        </div>
                        <ol>
                            {questions.map((question, index) => (
                                <li key={index}>
                                    <Row >
                                        <Col md={10}>
                                            <Form.Group controlId={`question${index}`}>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <Form.Label>Question:</Form.Label>
                                                    </div>
                                                    <div>
                                                        <RiDeleteBin6Line onClick={() => handleRemoveQuestion(index)}
                                                            className='mx-4 fs-3 text-danger' />
                                                    </div>
                                                </div>
                                                <Form.Control
                                                    as="textarea"
                                                    value={question.question || ''}
                                                    onChange={(event) =>
                                                        handleQuestionChange(index, 'question', event.target.value)
                                                    }
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {index > 0 && (
                                        <Button variant="danger" onClick={() => handleRemoveQuestion(index)}>
                                            <RiDeleteBin6Line /> Supprimer cette question
                                        </Button>
                                    )}

                                    {/* Add input fields for answers and correct answer */}
                                </li>
                            ))}

                        </ol>

                        <hr />
                        <div className="d-flex justify-content-between">

                            <Button variant="success" onClick={prevStep} className='mt-2'>
                                Précédent
                            </Button>
                            <Button size='lg' variant="primary" type='submit'  className='mt-2' style={{borderRadius: '50%'}}>
                                <GiRegeneration className='fs-1'/>  <br />Créer
                            </Button>
                        </div>
                    </>
                )}

            </Form>
        </Container>
    );
};

export default ExamForm;