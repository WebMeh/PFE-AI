import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

const StudentsPage = () => {
  const students = [
    { id: 1, firstName: 'Mohammed ', lastName: 'Alami', results: 85 },
    { id: 2, firstName: 'Yassmine', lastName: 'cheaou', results: 92 },
    { id: 3, firstName: 'Karima', lastName: 'Essoudi', results: 78 },
    { id: 4, firstName: 'Ilyas', lastName: 'Nasery', results: 90 },
    { id: 5, firstName: 'Ali', lastName: 'Touki', results: 82 },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>View Results</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <Button variant="primary" size="sm">
                  <FaEye /> View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentsPage;