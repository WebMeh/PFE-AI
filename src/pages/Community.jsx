import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaQuestionCircle, FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

const Community = () => {
    return (
        <>
            <MyNavbar />
            <Container className="my-5">
                <h1 className="text-center mb-4" style={{ color: '#c864c5', fontWeight: 'bold' }}>Questions de la Communauté</h1>
                <Row>
                    <Col md={8}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title style={{ color: '#0e213d' }}><FaQuestionCircle /> Comment utiliser les Hooks de React?</Card.Title>
                                <Card.Text>
                                    Je débute avec les Hooks de React et j'ai du mal à comprendre comment les utiliser efficacement. Quelqu'un pourrait-il fournir un exemple simple?
                                </Card.Text>
                                <Link className='btn text-white' to='/community/question' style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }}><FaRegComment /> Voir les Réponses</Link>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title style={{ color: '#0e213d' }}><FaQuestionCircle /> Quelles sont les meilleures pratiques pour le développement web?</Card.Title>
                                <Card.Text>
                                    Je cherche des conseils sur les meilleures pratiques à suivre pour le développement web moderne. Des suggestions?
                                </Card.Text>
                                <Link className='btn text-white' to='/community/question' style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }}><FaRegComment /> Voir les Réponses</Link>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title style={{ color: '#0e213d' }}><FaQuestionCircle /> Meilleures pratiques pour le design responsive?</Card.Title>
                                <Card.Text>
                                    Quelles sont les meilleures pratiques pour créer des designs responsive qui fonctionnent bien sur tous les appareils?
                                </Card.Text>
                                <Button style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }}><FaRegComment /> Voir les Réponses</Button>
                            </Card.Body>
                        </Card>
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

                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Community;