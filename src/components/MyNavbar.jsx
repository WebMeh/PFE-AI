import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { FaUserCheck } from "react-icons/fa6";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const MyNavbar = ({ prof }) => {

  const [options, setOptions] = useState([
    'Langage C',
    'Algorithmque',
    'Les suites numériques',
    'La biologie',
    'Mécanique du point',
  ]);
  const [selected, setSelected] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Search term:', searchTerm);
  };

  const handleInputChange = (value) => {
    setSelected(value);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const handleRegister = () => {
    setShowModal(true);
  };
  const handleLogin = () => {
    setShowLoginModal(true);
  };

  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fs-4' >
          <Link to='/' className='text-decoration-none' style={{ color: '#c864c5', fontWeight: 'bold' }}>AI-Education</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to='/' className='text-decoration-none' style={{ color: '#0e213d' }}>Accueil</Link>
            </Nav.Link>
            <NavDropdown title="Ressources" id="basic-nav-dropdown" style={{ color: 'red' }}>
              <NavDropdown.Item>
                <Link to='/cours' className='text-decoration-none' style={{ color: '#0e213d' }}>Cours en ligne</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to='/exercices' className='text-decoration-none' style={{ color: '#0e213d' }}>Exercices corrigés</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link onClick={handleLogin} className='text-decoration-none' style={{ color: '#0e213d' }}>Planification pour l'enseignant</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link to='/community' className='text-decoration-none' style={{ color: '#0e213d' }}>Posez vos questions</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to='/community' className='text-decoration-none' style={{ color: '#0e213d' }}>Communauté</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to='/about' className='text-decoration-none' style={{ color: '#0e213d' }}>Qui sommes nous?</Link>
            </Nav.Link>
            <Form onSubmit={handleSubmit} className='mx-4'>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                >
                </Form.Control>
              </InputGroup>
            </Form>
          </Nav>

          {/* Check if the user is connected or not */}
          {!prof && <>
            <Nav.Link className='mx-2' >
              <Button onClick={handleRegister}
                style={{ backgroundColor: "#c864c5", borderColor: '#c864c5' }}>S'inscrire</Button>
            </Nav.Link>
            <Nav.Link>
              <Button onClick={handleLogin} style={{ backgroundColor: "#0e213d", borderColor: "#0e213d" }}>Se connecter</Button>
            </Nav.Link>
          </>}
          {prof && <Nav.Link className='mx-2' style={{color: '#0e213d'}}>
            <FaUserCheck size={35}/>{prof.firstname + prof.lastname}
          </Nav.Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
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

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size='lg'>
        <Modal.Header closeButton className='text-center'>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
            Connexion AI-Education</Modal.Title>
          <LoginForm />
        </Modal.Body>
      </Modal>

    </>

  );
};

export default MyNavbar;