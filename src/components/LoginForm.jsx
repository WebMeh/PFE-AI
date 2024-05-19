import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginForm = () => {
    return (
        <Row className="justify-content-center my-5">
            <Col md={6}>
                <img
                    src="images/login.svg"
                    alt="Illustration"
                    className="img-fluid"
                />
            </Col>
            <Col md={6}>
                <Form style={{ color: "#0e213d", fontWeight: "bold" }}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre e-mail" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Entrez votre mot de passe" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Button style={{ backgroundColor: '#0e213d', borderColor: '#0e213d' }} type="submit" className="w-100 mt-3 ">
                        Se connecter
                    </Button>
                </Form>
                <div className=" mt-3">
                    <p>Ou connectez-vous avec :</p>
                    <div className="text-center">
                        <Button variant='success'  className=" my-2 w-100">
                            <FaGoogle /> Google
                        </Button>
                        <Button variant='danger' className="w-100">
                            <FaFacebook /> Facebook
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default LoginForm;