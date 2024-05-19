import MyNavbar from "../components/MyNavbar"
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from "../components/Footer";

const Home = () => {
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
                            <Button style={{ backgroundColor: '#c864c5', borderColor: '#c864c5', fontWeight: 'bold' }} className="w-100 my-2">
                                Je suis enseignant
                            </Button>
                            <Button style={{ backgroundColor: '#0e213d', borderColor: '#0e213d', fontWeight: 'bold' }} className="w-100 my-2">
                                Je suis étudiant
                            </Button>
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
                    <img src="images/teachers.png" class="img-fluid mx-auto d-block" alt="Image" />
                    <div className="text-center">
                        <a href="#communauty" className="btn w-50 p-2 text-white" style={{ fontWeight: 'bold', backgroundColor: '#6351ce', borderColor: '#6351ce' }}>Rejoindre la communauté</a>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Home;