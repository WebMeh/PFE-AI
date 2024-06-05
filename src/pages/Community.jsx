import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaQuestionCircle, FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Community = () => {
    const params = useParams();
    const userId = params.userId;
    const [userDetails, setUserDetails] = useState(null)
    const [questions, setQuestions] = useState([])
    const [connected, setConnected] = useState(false)
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        const fetchUser = async () => {
            try {
                // Fetch user details
                const response = await fetch('http://localhost:9090/users/byId/' + userId);
                const data = await response.json();
                setUserDetails(data.data);
                if (userDetails != null) setConnected(true)
                console.log("connected user :")
                console.log(userDetails)
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setIsloading(false)
            }
        };

        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/community`);
                setQuestions(response.data);
                console.log("All questions ")
                console.log(questions)
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchUser();
        console.log("user details ")
        console.log(userDetails)
        fetchQuestions();
    }, [userId]);


    return (
        <>
            {isloading && <h1>Loading data</h1>}
            {!isloading && <>
                {/* <MyNavbar prof={connected ? userDetails : null} /> */}
                <Container className="my-5">
                    <h1 className="text-center mb-4" style={{ color: '#c864c5', fontWeight: 'bold' }}>Questions de la Communauté</h1>
                    {questions.length > 0 && <Row>
                        <Col md={8}>
                            {questions.length>=0 && questions.map((question, index) => (
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title style={{ color: '#0e213d' }}><FaQuestionCircle /> Comment utiliser les Hooks de React?</Card.Title>
                                        <Card.Text>
                                            Je débute avec les Hooks de React et j'ai du mal à comprendre comment les utiliser efficacement. Quelqu'un pourrait-il fournir un exemple simple?
                                        </Card.Text>
                                        <Link className='btn text-white' to='/community/question' style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }}><FaRegComment /> Voir les Réponses</Link>
                                    </Card.Body>
                                </Card>
                            ))}

                            {/* Ajoutez d'autres questions ici */}
                        </Col>
                        <Col md={4}>
                            <h3 style={{ color: '#0e213d' }}>Questions Tendances</h3>
                            <ul>
                                <li>
                                    <Link to='/community/question'>Comment optimiser les performances de React?</Link>
                                </li>
                                <li>
                                    <Link to='/community/question'>Quels sont les avantages de l'utilisation de Redux?</Link>
                                </li>
                                <li>
                                    <Link to='/community/question'>Comment déployer une application React?</Link>
                                </li>
                                <li>
                                    <Link to='/community/question'> Quelle est la formule pour calculer l'aire d'un triangle?</Link>
                                </li>
                                <li>
                                    <Link to='/community/question'>Quelle est la différence entre un réseau local (LAN) et un réseau étendu (WAN)?</Link>
                                </li>
                            </ul>
                        </Col>

                    </Row>}
                    {questions.length <= 0 && <Alert variant='danger'>
                        <h1 className='text-center'>Aucune question dans la communauté</h1>
                    </Alert>
                    }
                </Container>
                <Footer />
            </>}
        </>
    );
};

export default Community;