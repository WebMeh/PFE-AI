import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const CourseCard = ({ course, userId}) => {

    const courseId = course.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("enrolling data to api spring boot ...")
        try {
            const response = await axios.post(
                'http://localhost:9090/student/enroll-course',
                {
                    userId,
                    courseId
                }
            );
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Card className="mb-4 shadow-sm mx-2" style={{ height: '430px' }}>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#0e213d' }}>{course.title}</Card.Title>
                <Card.Text>{course.description}<br />
                    <small className="text-muted">Professeur: {course.teacher.firstname} {course.teacher.lastname}</small>
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                    <Form onSubmit={handleSubmit}>
                        <div className="btn-group">
                            <Button type='submit' title='inscrivez-vous maintennant' variant="outline-secondary" size="sm">S'inscrire</Button>
                            <Button variant="outline-secondary" size="sm">Détiails du cours</Button>
                        </div>
                    </Form>
                </div>
                <div className='d-flex justify-content-between mt-1'>
                    <small>
                        {[...Array(2)].map((_, index) => (
                            <FaStar key={index} color="yellow" size={22} />
                        ))} </small>
                    <div className='muted text-grey' style={{ fontWeight: 'bolder' }}> {course.rating}</div>

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

const CourseList = ({ courses, userId }) => {

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
        <div className="border" style={{ backgroundColor: "" }}>
            <div className="slider-container p-4 mx-2">
                <Slider {...settings}>
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} userId={userId}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CourseList;