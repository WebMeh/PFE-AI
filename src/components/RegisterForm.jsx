import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [role, setRole] = useState('')
    const [apg, setApg] = useState(null)
    const [sum, setSum] = useState(null)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9090/auth/register',
                {
                    // Data to send to the spring boot api
                    firstname,
                    lastname,
                    username,
                    password,
                    apg,
                    sum
                });
            // Gérer la réponse de l'API (stocker le jeton JWT, rediriger l'utilisateur, etc.)
            console.log(response);
            const token = response.data.token;
            // Stocker le token JWT dans le local storage
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
            console.error(error);
        }
    };


    return (
        <Row className="justify-content-center my-5">
            <Col md={6}>
                <img src="images/register.svg" alt="Illustration" className="img-fluid" />
            </Col>
            <Col md={6}>
                <Form style={{ color: "#0e213d", fontWeight: "bold" }} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}
                            placeholder="Entrez votre nom" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Entrez votre prénom" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control type="email" value={username} onChange={(e) => setUsername(e.target.value)}
                            placeholder="Entrez votre e-mail" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
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
                                value={role} onChange={() => setRole('student')}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="Enseignant"
                                name="radiobutton"
                                id="enseignant"
                                value={role} onChange={() => setRole('enseignant')}
                                inline
                            />
                        </Col>
                    </Form.Group>
                    {role === "student" && <Form.Group>
                        <Form.Label>Votre apogée</Form.Label>
                        <Form.Control type="text" value={apg} onChange={(e) => setApg(e.target.value)}
                            placeholder="Entrez votre numéro d'apogée" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>}
                    {role === "enseignant" && <Form.Group>
                        <Form.Label>Votre Numéro de somme</Form.Label>
                        <Form.Control type="text" value={sum} onChange={(e) => setSum(e.target.value)}
                            placeholder="Entrez votre numéro de somme" className='mb-2' style={{ outline: '1px solid #0e213d' }} />
                    </Form.Group>}

                    <Button style={{ backgroundColor: '#0e213d', borderColor: '#0e213d' }} type="submit" className="w-100 mt-3 ">
                        S'inscrire
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default RegisterForm;