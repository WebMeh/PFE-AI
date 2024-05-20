import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const RegisterForm = () => {
    return (
        <Row className="justify-content-center my-5">
            <Col md={6}>
                <img src="images/register.svg" alt="Illustration" className="img-fluid" />
            </Col>
            <Col md={6}>
                <Form style={{ color: "#0e213d", fontWeight: "bold" }}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre prénom" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre e-mail" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Entrez votre mot de passe" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={12}>
                            Je suis :
                        </Form.Label>
                        <Col sm={12} className='text-center'>
                            <Form.Check
                                type="radio"
                                label="Élève"
                                name="radiobutton"
                                id="eleve"
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="Enseignant"
                                name="radiobutton"
                                id="enseignant"
                                inline
                            />
                        </Col>
                    </Form.Group>

                    <Button style={{ backgroundColor: '#0e213d', borderColor: '#0e213d' }} type="submit" className="w-100 mt-3 ">
                        S'inscrire
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default RegisterForm;