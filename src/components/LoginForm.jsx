import React, { useState } from 'react';
import axios from 'axios';

import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:9090/auth/login', { username, password });
        //     // Gérer la réponse de l'API (stocker le jeton JWT, rediriger l'utilisateur, etc.)
        //     console.log(response);
        //     // Stocker le token JWT dans le local storage
        //     localStorage.setItem('jwtToken', response.data.token);
        //     navigate('/welcome')
        // } catch (error) {
        //     console.error('Registration error:', error.response.data);
        //     setError(error.response.data.message)
        // }
        try {
            const response = await axios.post('http://localhost:9090/auth/login', { username, password });
            const  token  = response.data.token;
            localStorage.setItem('token', token);

            // Fetch user details
            const userResponse = await axios.get('http://localhost:9090/users/byUsername', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const userDetails = userResponse.data;

            // Navigate to the appropriate page based on the user's role
            if (userDetails.apg === null) {
                navigate('/prof', { state: { userDetails } });
            } else {
                navigate('/student', { state: { userDetails } });
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


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
                <Form style={{ color: "#0e213d", fontWeight: "bold" }} onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)}
                            type="email" placeholder="Entrez votre e-mail" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder="Entrez votre mot de passe" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Button style={{ backgroundColor: '#0e213d', borderColor: '#0e213d' }} type="submit" className="w-100 mt-3 ">
                        Se connecter
                    </Button>
                </Form>
                {error && <p className="error-message"><Alert variant='danger' className='my-2 '>{error}</Alert></p>}
                <div className=" mt-3">
                    <p>Ou connectez-vous avec :</p>
                    <div className="text-center">
                        <Button variant='success' className=" my-2 w-100">
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