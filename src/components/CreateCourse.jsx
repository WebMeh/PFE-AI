import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const CreateCourse = () => {

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const params = useParams();
  const teacherId = params.teacherId;
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null)
  // const userDetails = location.state ? userDetails : { id: 44, firstname: 'ali' }; // Access data if present

  // useEffect(() => {
  //   const getUserData = async () => {
  //     const token = localStorage.getItem('token');

  //     try {
  //       const response = await axios.get('http://localhost:9090/users/connected', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log('connected user by token');
  //       console.log(response.data);
  //       setUser(response.data)

  //      // return response.data; // User data from the server
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sending data to api spring boot ...")
    console.log('connected user');
    console.log();
    try {
      const response = await axios.post(
        'http://localhost:9090/teacher/create-course/' + localStorage.getItem('userId'),
        {
          title,
          description,
          category
        }
      );

      console.log('createing course for teacher : ', localStorage.getItem('userId'));
      console.log(response.data);
      // Reset form fields
      if (response.data != null) {
        setShowSuccessModal(true); // Show success modal
        setTitle('');
        setDescription('');
        setCategory('');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Create Course</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control required
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control required
            as="textarea"
            rows={3}
            placeholder="Enter course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control required
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" >Select a category</option>
            <option value="Math">Math</option>
            <option value="Programmation">Programming</option>
            <option value="Langues">Languages</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className='my-2'>
          Create Course
        </Button>
      </Form>
      {/* show succes creating course modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Félicitation ! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>vous avez crée un nouveau cours.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => navigate('/courses/prof/' + localStorage.getItem('userId'))}>
            Voir vos cours
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateCourse;