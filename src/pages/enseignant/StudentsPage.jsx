import React from 'react';
import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye, FaPlus } from 'react-icons/fa';
import { Container, Row, Col, Nav, Card, Modal, Form } from 'react-bootstrap';
import { Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { FaFileExcel, FaSortNumericDown } from 'react-icons/fa';
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
import { MdDelete } from "react-icons/md";

const StudentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByID, setSortByID] = useState(false);

  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com' },
    { id: 5, name: 'Tom Davis', email: 'tom@example.com' },
    { id: 6, name: 'Samantha Brown', email: 'samantha@example.com' },
    { id: 7, name: 'Michael Wilson', email: 'michael@example.com' },
    { id: 8, name: 'Emily Taylor', email: 'emily@example.com' },
    { id: 9, name: 'David Anderson', email: 'david@example.com' },
    { id: 10, name: 'Sarah Thompson', email: 'sarah@example.com' },
    { id: 11, name: 'Mark Lee', email: 'mark@example.com' },
    { id: 12, name: 'Jessica Garcia', email: 'jessica@example.com' },
    { id: 13, name: 'Christopher Hernandez', email: 'christopher@example.com' },
    { id: 14, name: 'Olivia Gonzalez', email: 'olivia@example.com' },
    { id: 15, name: 'Daniel Ramirez', email: 'daniel@example.com' },
  ];

  const usersPerPage = 8;
  const totalPages = Math.ceil(userData.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedUsers = sortByID
    ? filteredUsers.sort((a, b) => a.id - b.id)
    : filteredUsers;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleExportToExcel = () => {
    // Logique pour exporter les données en Excel
    console.log('Exporting to Excel...');
  };

  const handleSortByID = () => {
    setSortByID(!sortByID);
  };


  return (
    <div>
      {/* sidebar ici */}
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
          

          <Container>
            <div>
              <div className="d-flex justify-content-between mt-3">
                <div className='d-flex'>
                  <InputGroup className="mb-3 w-100">
                    <FormControl
                      placeholder="Chercher un élève  ..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </InputGroup>
                  <FaFileExcel className="mx-3 mt-1 fs-3 text-success" onClick={handleExportToExcel} />
                  <FaSortNumericDown className=" mt-1 fs-3 text-primary" onClick={handleSortByID} />
                </div>
                <div className='mx-4 '>
                 <Button variant='success'> Ajouter un élève<FaPlus className='mx-2 fs-2' /></Button>
                </div>
              </div>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>  APOGEE</th>
                    <th>PRENOM</th>
                    <th>NOM</th>
                    <th>Email</th>
                    <th className='text-center'>ACtions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{"après"}</td>
                      <td>{user.email}</td>
                      <td>{
                        <div className='d-flex justify-content-center'>
                          <FaEye className='fs-2 mx-3 text-primary' title='Voir les résultats'/>
                          <MdDelete className='fs-2 text-danger' title='Supprimer'/>
                        </div>
                      }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className='d-flex justify-content-end mx-4'>
                <Pagination>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Pagination.Item
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            </div>
          </Container>
        </Col>
      </Row>

    </div>
  );
};

export default StudentsPage;