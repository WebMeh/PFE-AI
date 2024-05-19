import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaBriefcase, FaHeart, FaChalkboardTeacher, FaRegLightbulb } from 'react-icons/fa';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <MyNavbar />
      <Container className="my-5">
        <Row>
          <img src="images/about.svg" className='img-fluid' style={{ maxHeight: '550px' }} />
        </Row>
        <Row>
          <Col md={4}>
            <FaUsers size={50} color="blue" />
            <h3 style={{ color: '#0e213d' }}>Notre Équipe</h3>
            <p>
              Notre équipe est composée d'experts en éducation et en technologie.
              Nous travaillons ensemble pour développer un outil AI innovant
              qui aide les élèves et les enseignants dans leur parcours éducatif.
            </p>
          </Col>
          <Col md={4}>
            <FaBriefcase size={50} color="green" />
            <h3 style={{ color: '#0e213d' }}>Notre Histoire</h3>
            <p>
              Depuis nos débuts, nous nous sommes engagés à révolutionner l'éducation
              en utilisant la technologie pour offrir des solutions innovantes et adaptées
              aux besoins des apprenants et des éducateurs.
            </p>
          </Col>
          <Col md={4}>
            <FaHeart size={50} color="red" />
            <h3 style={{ color: '#0e213d' }}>Notre Engagement</h3>
            <p>
              Notre engagement est de fournir un soutien continu et des outils de qualité
              pour améliorer l'expérience d'apprentissage de nos utilisateurs et les aider
              à atteindre leurs objectifs éducatifs de manière efficace et enrichissante.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FaChalkboardTeacher size={50} color="purple" />
            <h3 style={{ color: '#0e213d' }}>Enseignants Utilisateurs</h3>
            <p>
              Notre plateforme est utilisée par des enseignants de l'Université Sultane Moulay Slimane qui apprécient son efficacité pour améliorer l'apprentissage de leurs étudiants.
            </p>
          </Col>
          <Col md={4}>
            <FaRegLightbulb size={50} color="orange" />
            <h3 style={{ color: '#0e213d' }}>Efficacité Pédagogique</h3>
            <p>
              Grâce à nos outils d'analyse et de suivi, les enseignants peuvent adapter leurs cours en temps réel et identifier les domaines où les étudiants ont besoin de plus de soutien.
            </p>
          </Col>

          <Col md={4}>
            <FaUsers size={50} color="blue" />
            <h3 style={{ color: '#0e213d' }}>Engagement des Étudiants</h3>
            <p>
              Notre plateforme rend l'apprentissage plus interactif et engageant, ce qui se traduit par une meilleure participation et de meilleurs résultats pour les étudiants.
            </p>
          </Col>

        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;