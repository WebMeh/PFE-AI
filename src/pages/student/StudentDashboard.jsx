import React, { useEffect } from 'react';
import { Container, Row, Col, Card, NavDropdown, Button } from 'react-bootstrap';
import { FaUserGraduate, FaSignOutAlt } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import SideBarStudent from './SideBarStudent';
import NavbarStudent from './NavbarStudent';
import { Link, useLocation } from 'react-router-dom';


const StudentDashboard = () => {
    useEffect(() => {
        console.log(localStorage.getItem('token'))
        console.log(userDetails)
    }, [])
    const { state } = useLocation();
    const { userDetails } = state;

    
    return (
        <div >
            <NavbarStudent user={userDetails} />
            <Row>
                <SideBarStudent userId={userDetails ? userDetails.id : 777}/>
                <Col md={9} className=''>
                    <div>
                        <h1 className='text-primary text-center'>
                            Welcome {userDetails.firstname} {userDetails.lastname}
                        </h1>
                    </div>
                    <div className='d-flex justify-content-center my-4'>
                        <Link to={'/student/'+userDetails.id+'/all-courses'} className='my-4 btn btn-primary btn-lg' >
                            Inscrivez-vous dans un cours
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StudentDashboard;
