import { Button, Card, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import NavbarStudent from "./NavbarStudent";
import SideBarStudent from "./SideBarStudent";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdGroupAdd } from "react-icons/md";

const CourseCard = ({ course }) => {
    return (
        <Card className="mb-4 shadow-sm mx-2" style={{ height: '320px' }}>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#0e213d' }}>{course.title}</Card.Title>
                <Card.Subtitle>{course.description}</Card.Subtitle>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Button variant="outline-secondary" size="sm">Explorer</Button>
                        <Button variant="outline-secondary" size="sm">S'évaluer</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to='' style={{ textDecoration: 'none', color: 'gray' }}>
                        <CiUser />
                        <small>Professeur: <b>{course.teacher.firstname + course.teacher.lastname}</b></small>
                    </Link>
                </div>

            </Card.Body>
        </Card>
    );
};

const CourseList = ({ courses }) => {

    return (
        <Row className=" p-4 mx-2">
            {courses.map((course, index) => (
                <Col md={4}>
                    <CourseCard key={index} course={course} />
                </Col>
            ))}
        </Row>
    );
};

const StudentCourses = () => {
    const [courses, setCourses] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    const params = useParams();
    const studentId = params.studentId;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Fetch user details
                const response = await fetch('http://localhost:9090/users/byId/' + studentId);
                const data = await response.json();
                setUserDetails(data.data);
                console.log("connected user")
                console.log(userDetails)
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:9090/student/my-courses/' + studentId);
                const data = await response.json();
                console.log("my courses")
                console.log(data)
                setCourses(data)
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
        fetchUser();
    }, []);

    return (
        <>
            <NavbarStudent />

            <Row>
                <SideBarStudent />
                <Col md={9}>
                    <div className="d-flex justify-content-between">
                        <h4 style={{ fontFamily: 'sans-serif', color: '#0e213d' }}>Bonjour <b> {userDetails && userDetails.lastname + userDetails.firstname},</b> vous cours suivis : </h4>
                        <Link  to={'/student/'+studentId+'/all-courses'}
                            style={{ backgroundColor: '#0e213d', color: 'white' }} className="mx-2 btn ">
                            <MdGroupAdd size={22} /> S'inscrire dans un cours
                        </Link>
                    </div>
                    <hr className="w-50" />
                    <CourseList courses={courses} />
                </Col>
            </Row>
        </>
    )
}
export default StudentCourses