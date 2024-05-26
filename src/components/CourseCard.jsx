import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CourseCard = ({ course }) => {


    return (
        <Card className="mb-4 shadow-sm mx-2" style={{ height: '430px' }}>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#0e213d' }}>{course.title}</Card.Title>
                <Card.Text>description du cours "{course.title}" <br />
                    <small className="text-muted">Professeur: {course.instructor}</small>
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                        <Button variant="outline-secondary" size="sm">S'inscrire</Button>
                        <Button variant="outline-secondary" size="sm">Détiails du cours</Button>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-1'>
                    <small>
                        {[...Array(Math.floor(course.rating))].map((_, index) => (
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
        <div classname="border" style={{ backgroundColor: "" }}>
            <div className="slider-container p-4 mx-2">
                <Slider {...settings}>
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CourseList;