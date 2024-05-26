import MyNavbar from "../components/MyNavbar"
import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleRegister = () => {
        setShowModal(true);
    };
    return (
        <>
            <MyNavbar />

            <Container className="my-5">
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <h1 className="mb-4" style={{ color: '#0e213d', fontWeight: 'bold' }}>AI-Education : L'assistant intelligent pour
                            l'éducation</h1>
                        <h3 className="text-center mt-2" style={{ color: '#0e213d' }}>Réinventez l'enseignement,
                            libérez le potentiel des élèves avec notre AI éducative révolutionnaire.</h3>

                        <div className="">
                            <Link to='/prof' style={{ backgroundColor: '#c864c5', borderColor: '#c864c5', fontWeight: 'bold' }} className="w-100 my-2 btn text-white">
                                Je suis enseignant
                            </Link>
                            <Link onClick={handleRegister} style={{ backgroundColor: '#0e213d', borderColor: '#0e213d', fontWeight: 'bold' }} className="w-100  my-2 btn text-white">
                                Je suis étudiant
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src="images/landing.svg" alt="Illustration" className="img-fluid" />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <h2 style={{ color: '#0e213d', fontWeight: 'bold' }} className="py-4 text-center">
                        Rejoignez notre communauté des enseignants et étudiants qui discuttent 24h/24
                    </h2>
                    <h4 className="mb-4 text-center" style={{ color: '#0e213d' }}>
                        Soutenir les enseignants pour une éducation primaire, secondaire et universitaire enrichissante !
                    </h4>
                    <p className="text-center fs-5" style={{ color: '#0e213d', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        Notre mission est d'offrir aux enseignants les outils nécessaires pour libérer leur potentiel et enrichir
                        l'expérience d'apprentissage de chaque étudiant, tout en favorisant un environnement éducatif inclusif et
                        stimulant, propice à la croissance et à la réussite de tous.</p>
                    <img src="images/teachers.png" className="img-fluid mx-auto d-block" alt="Image" />
                    <div className="text-center">
                        <Link to='/community' className="btn w-50 p-2 text-white" style={{ fontWeight: 'bold', backgroundColor: '#6351ce', borderColor: '#6351ce' }}>Rejoindre la communauté</Link>
                    </div>
                </Row>
                {/* Register Modal */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
                    <Modal.Header closeButton className='text-center'>
                    </Modal.Header>
                    <Modal.Body>
                        <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
                            Rejoindre AI-Education</Modal.Title>
                        <RegisterForm />
                    </Modal.Body>
                </Modal>
            </Container>
            <Footer />
        </>
    )
}

export default Home;