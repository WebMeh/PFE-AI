import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Button, Card, Modal, Form, InputGroup } from 'react-bootstrap';
import { FaPeopleArrows, FaRegFilePdf, FaRocketchat } from 'react-icons/fa';
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcPlanner, FcStatistics } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { PiStudentBold, PiExamBold } from "react-icons/pi";
import { GrTasks } from "react-icons/gr";
import ChatForm from '../../components/ChatForm';
import FichForm from '../../components/FichForm';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarProf from '../../components/NavbarProf';
import SideBarProf from '../../components/SideBarProf';
import CreateCourse from '../../components/CreateCourse';

function Dashboard() {
  const [showCreateCourForm, setShowCreateCourForm] = useState(false)
  const [showCreateFichForm, setShowCreateFichForm] = useState(false)
  const [showChatForm, setShowChatForm] = useState(false)
  // const { state } = useLocation();
  // const { userDetails } = state;
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user details
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('http://localhost:9090/users/byUsername', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(userResponse.data);
        console.log(userDetails)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();

  }, []);

  const handleCreateCours = () => {
    setShowCreateCourForm(true);
  };


  const handleCreateFich = () => {
    setShowCreateFichForm(true);
  };

  const handleChat = () => {
    setShowChatForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
    navigate('/');
  };

  return (
      <Container fluid>
        <Row>
          {/* SideBar Prof */}
          <SideBarProf prof={userDetails}/>
          
          <Col md={10}>
            {/* Navbar Prof */}
            <NavbarProf prof={userDetails}/>

            <Container>
              <Row className='my-4 p-4' style={{height: '100vh'}}>
                <Col md={4} className=''>
                  <Link onClick={handleCreateCours} className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <IoCreate className='fs-1' />
                        <h5>Créer un nouveau cours</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className=''>
                  <Link onClick={handleCreateFich} className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <FaRegFilePdf className='fs-1' />
                        <h5>Créer une fiche pédagogique</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className=''>
                  <Link  className='text-decoration-none' to={userDetails && '/prof/'+userDetails.id}>
                    <Card>
                      <Card.Body className='text-primary' >
                        <FaPeopleArrows className='fs-1' />
                        <h5>Visiter la communauté</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className=''>
                  <Link to='/students/profId' className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <PiStudentBold className='fs-1' />
                        <h5>Les élèves</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className=''>
                  <Link to='/planifications/create' className='text-decoration-none'>
                    <Card>
                      <Card.Body className='text-primary'>
                        <GrTasks className='fs-1' />
                        <h5>Suivi d'évaluations</h5>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} className='' style={{height: '50vh'}}>
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
              Créer un nouveau cours</Modal.Title>
              <CreateCourse teacherId={userDetails != null ? userDetails.id: 1}/>
          </Modal.Body>
        </Modal>
        {/* Modal pour créer nouvelle fiche pédagogique */}
        <Modal show={showCreateFichForm} onHide={() => setShowCreateFichForm(false)} centered size='lg'>
          <Modal.Header closeButton className='text-center'>
            <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
              Créer votre fiche pédagogique</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FichForm />
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
  );
}

export default Dashboard;