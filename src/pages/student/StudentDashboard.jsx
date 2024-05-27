import React from 'react';
import { Container, Row, Col, Card, NavDropdown, Button } from 'react-bootstrap';
import { FaUserGraduate, FaSignOutAlt } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import SideBarStudent from './SideBarStudent';
import NavbarStudent from './NavbarStudent';

const StudentDashboard = () => {
    // ... (Your data and component definitions remain the same)

    return (
        <div >
            <NavbarStudent />
            <SideBarStudent />
        </div>
    );
};

export default StudentDashboard;
