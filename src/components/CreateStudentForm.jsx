import React, { useState } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';

const CreateStudentForm = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour créer un nouvel étudiant ici
        console.log('ID:', id);
        console.log('Email:', email);
        handleClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className='g-2'>
                <Col md>
                    <Form.Group controlId="formId">
                        <Form.Label>Numéro d'Apogee</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrez l'apg de l'étudiant"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Entrez l'email de l'étudiant"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Col>

            </Row>

            <Row className='g-2'>
                <Col md>
                    <Form.Group controlId="formId">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrez le prénom de l'étudiant"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Entrez le nom de l'étudiant"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Col>

            </Row>
            <Row className='g-2'>
                <Col md>
                    <Form.Group controlId="formId">
                        <Button style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }} className='my-2 w-100'> Générer le mot de passe</Button>
                    </Form.Group>
                </Col>
                <Col md>
                    {/* <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Entrez l'email de l'étudiant"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group> */}
                </Col>

            </Row>
            <div className='d-flex justify-content-end'>
                <Button variant="primary" type="submit" size='lg'>
                    Créer
                </Button>
            </div>
        </Form>
    );
};

export default CreateStudentForm;