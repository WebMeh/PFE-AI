import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavbarProf from '../../components/NavbarProf';
import SideBarProf from '../../components/SideBarProf';
import { CiUser } from "react-icons/ci";
import Slider from "react-slick";


const CourseCard = ({ course }) => {
  return (
    <Card className="mb-4 shadow-sm mx-2" style={{ height: '320px' }}>
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', color: '#0e213d' }}>{course.title}</Card.Title>
        <Card.Subtitle>
          {course.description}
        </Card.Subtitle>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Button variant="outline-secondary" size="sm">Explorer</Button>
            <Button variant="outline-secondary" size="sm">S'évaluer</Button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to='' style={{ textDecoration: 'none', color: 'gray' }}>
            <CiUser />
            <small>Professeur: {course.teacher.firstname + course.teacher.lastname}</small>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e213d", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e213d", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

const CourseList = ({ courses }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Row className=" p-4 mx-2">
      <Slider {...settings}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Slider>
    </Row>
  );
};



const Courses = () => {
  const [userDetails, setUserDetails] = useState(null)
  // const [courses, setCourses] = useState([])
  const params = useParams();
  const teacherId = params.teacherId;
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCoursesExists, setIsCoursesExists] = useState(false);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user details
        const response = await fetch('http://localhost:9090/users/byId/' + teacherId);
        const data = await response.json();
        setUserDetails(data.data);
        console.log(userDetails)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const fetchCourses = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:9090/teacher/' + teacherId + '/courses/all');
        const data = await response.json();
        console.log('courses of teacher : '+teacherId);
        console.log(data.data);
        setCourses(data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
    fetchUser();
  }, []);

  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        {/* SideBar Prof */}
        <SideBarProf prof={userDetails} />
        <Col md={10}>
          {/* Navbar Prof */}
          <NavbarProf prof={userDetails} />
          <Container>
            <Row className='my-4'>
              <h3>Mes cours</h3>

              <hr className='w-50' />

              <div>
                {isLoading && <p>Loading coursess</p>}
                {courses.length <= 0 ? <div className='my-4 d-flex justify-content-center'>
                    <Alert className='my-4' variant='warning'>Vous n'avez aucun cours !
                      <Link to={'/create-course/prof/'+teacherId} className='mx-3'> Publier un nouveau cours maintennant</Link>
                    </Alert>
                </div> : <CourseList courses={courses} />}
              </div>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;