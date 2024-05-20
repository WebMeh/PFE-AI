import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button, Card, Modal, } from 'react-bootstrap';
import { FaPeopleArrows, FaRegFilePdf, FaRocketchat } from 'react-icons/fa';
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcPlanner, FcStatistics } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { GrTasks } from "react-icons/gr";
import ChatForm from '../../components/ChatForm';

function Dashboard() {
  const [showCreateCourForm, setShowCreateCourForm] = useState(false)
  const [showCreateFichForm, setShowCreateFichForm] = useState(false)
  const [showChatForm, setShowChatForm] = useState(false)

  const handleCreateCours = () => {
    setShowCreateCourForm(true);
  };

  const handleCreateFich = () => {
    setShowCreateFichForm(true);
  };

  const handleChat = () => {
    setShowChatForm(true);
  };

  return (
    <div>

      <Container fluid>
        <Row>
          <Col md={2} className='bg-dark' style={{ maxHeight: '100%' }}>
            <h3 className='text-white p-3'>AI-Education</h3>
            {/* Sidebar content */}
            <Nav defaultActiveKey="/home" className="flex-column bg-dark" style={{ height: '100vh' }}>
              <hr className='text-white' />
              <Nav.Link >
                <Link to='/prof/' className='text-white text-decoration-none'>
                  <MdDashboard className='text-white fs-4 mx-2' />Tableau de bord
                </Link>
              </Nav.Link>
              <hr className='text-white' />

              <Nav.Link >
                <Link to={'/cours/profId'} className='text-white text-decoration-none'>
                  <IoBookSharp className='text-white fs-4 mx-2' />Mes cours
                </Link>
              </Nav.Link>
              <hr className='text-white' />

              <Nav.Link >
                <Link to={'/planifications/profId'} className='text-white text-decoration-none'>
                  <FcPlanner className='text-white fs-4 mx-2' />Mes planifications
                </Link>
              </Nav.Link>
              <hr className='text-white' />

              <Nav.Link >
                <Link to={'/statistics'} className='text-white text-decoration-none'>
                  <FcStatistics className='text-white fs-4 mx-2' />Statistiques
                </Link>
              </Nav.Link>
              <hr className='text-white' />

              <Nav.Link >
                <Link to={'/community'} className='text-white text-decoration-none'>
                  <FaPeopleArrows className='text-white fs-4 mx-2' />Communauté
                </Link>
              </Nav.Link>
              <hr className='text-white' />

              <Nav.Link className='position-absolute bottom-0'>
                <Link to={'/logout'} className='text-white text-decoration-none btn btn-danger'>
                  <CiLogout className='text-white fs-4 mx-2' />Déconnecter
                </Link>
              </Nav.Link>

            </Nav>
          </Col>
          <Col md={10}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn  me-md-2 mt-3"> <CgProfile className='fs-1' /> </button>

            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <i style={{ fontSize: '80%', fontWeight: 'bold' }}>Prof. Nom + Prénom</i>
            </div>

            <Container>
              <Row className='my-4'>
                <Col md={4} className='my-4'>
                  <Link onClick={handleCreateCours} className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <IoCreate className='fs-1' />
                        <h5>Créer un nouveau cours</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='my-4'>
                  <Link onClick={handleCreateFich} className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <FaRegFilePdf className='fs-1' />
                        <h5>Créer une fiche pédagogique</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='my-4'>
                  <Link to='/community' className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <FaPeopleArrows className='fs-1' />
                        <h5>Visiter la communauté</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='my-4'>
                  <Link to='/students/profId' className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <PiStudentBold className='fs-1' />
                        <h5>Les élèves</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='my-4'>
                  <Link to='/planifications/create' className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <GrTasks className='fs-1' />
                        <h5>Suivi d'évaluations</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='my-4'>
                  <Link onClick={handleChat} className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <FaRocketchat className='fs-1' />
                        <h5>AI-Education Chat</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        {/* Modal pour créer nouveau cours avec AI */}
        <Modal show={showCreateCourForm} onHide={() => setShowCreateCourForm(false)} centered size='lg'>
          <Modal.Header closeButton className='text-center'></Modal.Header>
          <Modal.Body>
            <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
              Create New Cours</Modal.Title>
          </Modal.Body>
        </Modal>

        {/* Modal pour créer nouvelle fiche pédagogique */}
        <Modal show={showCreateFichForm} onHide={() => setShowCreateFichForm(false)} centered size='lg'>
          <Modal.Header closeButton className='text-center'></Modal.Header>
          <Modal.Body>
            <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
              Créer une fiche pédagogique</Modal.Title>
          </Modal.Body>
        </Modal>

        {/* Chat With AI Modal */}
        <Modal show={showChatForm} onHide={() => setShowChatForm(false)} centered size='lg'>
          <Modal.Header closeButton className='text-center'>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
              AI-Education Conversation</Modal.Title>
            <ChatForm />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Dashboard;