import { Button, Card, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import NavbarStudent from "./NavbarStudent";
import SideBarStudent from "./SideBarStudent";
const CourseCard = ({ course }) => {
    return (
        <Card className="mb-4 shadow-sm mx-2" style={{ height: '300px' }}>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#0e213d' }}>{course.title}</Card.Title>
               
                <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                        <Button variant="outline-secondary" size="sm">Explorer ce cours</Button>
                        <Button variant="outline-secondary" size="sm">Exercice du cours</Button>
                    </div>
                </div>

            </Card.Body>
        </Card>
    );
};

const CourseList = ({ courses }) => {

    return (
        <Row className=" p-4 mx-2">
            {courses.map((course, index) => (
                <Col md={3}>
                    <CourseCard key={index} course={course} />
                </Col>
            ))}
        </Row>
    );
};

const StudentCourses = () => {
    const courses = [
        {
            image: '/images/call-center.png',
            title: 'Python: La formation complète 2024',
            description: 'Description for Course 1',
            instructor: 'Prof 1',
            rating: 4.5
        },
        {
            image: '/images/call-center.png',
            title: 'Analyse mathématique avancée',
            description: 'Description for Course 2',
            instructor: 'Prof 2',
            rating: 3.2
        },
        {
            image: '/images/call-center.png',
            title: 'Structures de données en C',
            description: 'Description for Course 3',
            instructor: 'Prof 3',
            rating: 4.8
        },
        {
            image: '/images/call-center.png',
            title: 'Cours 4',
            description: 'Description for Course 3',
            instructor: 'Prof 4',
            rating: 4.8
        },
        {
            image: '/images/call-center.png',
            title: 'Cours 5',
            description: 'Description for Course 3',
            instructor: 'Prof 5',
            rating: 2.8
        },
        {
            image: '/images/call-center.png',
            title: 'Cours 6',
            description: 'Description for Course 3',
            instructor: 'Prof 6',
            rating: 4.8
        },
        {
            image: '/images/call-center.png',
            title: 'Cours 7',
            description: 'Description for Course 3',
            instructor: 'Prof 7',
            rating: 4.8
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const filteredData = courses.filter((course) => course.category === category);
        setFilteredCourses(filteredData);
    };
    return (
        <>
            <NavbarStudent />

            <Row>
                <SideBarStudent />
                <Col>
                    <CourseList courses={courses} />
                </Col>
            </Row>
        </>
    )
}
export default StudentCourses