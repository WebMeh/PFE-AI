import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaBook, FaCheckCircle, FaPencilAlt, FaSignOutAlt } from 'react-icons/fa';

const Navigation = () => {
  const [activeKey, setActiveKey] = useState('courses'); // Initially, "Courses" is active

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="#home">Tableau de bord étudiant</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-scroll" />
      <Navbar.Collapse id="navbar-scroll">
        <Nav className="mr-auto">
          <NavDropdown title="Mes cours" id="courses-dropdown" onSelect={handleSelect} activeKey={activeKey === 'courses'}>
            <NavDropdown.Item eventKey="courses" href="/courses">Liste des cours</NavDropdown.Item>
            <NavDropdown.Item eventKey="grades" href="/grades">Notes et évaluations</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="assignments" href="/assignments" onSelect={handleSelect} active={activeKey === 'assignments'}>
            Mes devoirs
          </Nav.Link>
          <Nav.Link eventKey="exercises" href="/exercises" onSelect={handleSelect} active={activeKey === 'exercises'}>
            Exercices corrigées
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/profile">Profil</Nav.Link>
          <Nav.Link href="/logout">
            <FaSignOutAlt className="mr-2" /> Déconnecter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
