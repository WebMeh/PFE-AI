import React from "react"
import { Col, Nav, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaPeopleArrows, FaRegFilePdf, FaRocketchat } from 'react-icons/fa';
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FcPlanner, FcStatistics } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { PiStudentBold, PiExamBold } from "react-icons/pi";
import { GrTasks } from "react-icons/gr";


const SideBarProf = ({ prof }) => {
    return (
        <Col md={2} className='bg-dark' style={{ maxHeight: '100%' }}>
            {/* Sidebar content */}
            <Nav defaultActiveKey="/home" className="flex-column bg-dark position-fixed" style={{ height: '100vh' }}>
                <h3 className='text-white p-3'>AI for ed</h3>
                <hr className='text-white' />
                <Nav.Link >
                    <Link to='/prof/' className='text-white text-decoration-none'>
                        <MdDashboard className='text-white fs-4 mx-2' />Tableau de bord
                    </Link>
                </Nav.Link>
                <hr className='text-white' />

                <Nav.Link >
                    <Link to={prof && '/courses/prof/' + prof.id} className='text-white text-decoration-none'>
                        <IoBookSharp className='text-white fs-4 mx-2' />Mes cours
                    </Link>
                </Nav.Link>
                <hr className='text-white' />

                <Nav.Link >
                    <Link to={prof && '/planifications/prof/' + prof.id} className='text-white text-decoration-none'>
                        <FcPlanner className='text-white fs-4 mx-2' />Mes planifications
                    </Link>
                </Nav.Link>
                <hr className='text-white' />

                <Nav.Link >
                    <Link to={'/exam/create'} className='text-white text-decoration-none'>
                        <PiExamBold className='text-white fs-4 mx-2' />Evaluations
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
                    <Link to={prof && '/community/' + prof.id} className='text-white text-decoration-none'>
                        <FaPeopleArrows className='text-white fs-4 mx-2' />Communauté
                    </Link>
                </Nav.Link>
                <hr className='text-white' />

                <Nav.Link className='position-absolute bottom-0'>
                    <Link to='/logout' className='text-white text-decoration-none btn btn-danger'>
                        <CiLogout className='text-white fs-4 mx-2' />Déconnecter
                    </Link>
                </Nav.Link>

            </Nav>
        </Col>

    )
}

export default SideBarProf