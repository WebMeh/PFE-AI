import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { RiAddLine, RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

const Test = () => {
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

    return (
        <Container>
            <h2>Create Exam</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="selectedCourse">
                    <Form.Label>Select Le cours:</Form.Label>
                    <Form.Control as="select" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
                        <option value="">Select a Course</option>
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
                    <Form.Label>Number of Questions:</Form.Label>
                    <Form.Control type="number" value={numQuestions} onChange={(event) => setNumQuestions(event.target.value)} />
                </Form.Group>
                {/* ... */}
                <Button variant="primary" onClick={handleAddQuestion}>
                    <RiAddLine /> Nouvelle Question
                </Button>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3>Question {index + 1}</h3>
                        {index > 0 && (
                            <Button variant="danger" onClick={() => handleRemoveQuestion(index)}>
                                <RiDeleteBin6Line /> Supprimer le  question
                            </Button>
                        )}
                        <Form.Group controlId={`question${index}`}>
                            <Form.Label>Question:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={question.question || ''}
                                onChange={(event) =>
                                    handleQuestionChange(index, 'question', event.target.value)
                                }
                            />
                        </Form.Group>
                        {/* Add input fields for answers and correct answer */}
                    </div>
                ))}
                {/* ... */}
            </Form>
        </Container>
    );
};

export default Test;