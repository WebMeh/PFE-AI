import { Col, Container, Nav, Row } from "react-bootstrap"
import { GrTasks } from "react-icons/gr";
import { Link } from "react-router-dom"
import { PiExamFill } from "react-icons/pi";
import { RiTaskFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
const SideBarStudent = () => {
    return (
            <Col md={3} className="border ">
                {/* Sidebar content */}
                <Nav defaultActiveKey="/home" className="flex-column " style={{ height: '100vh' }}>
                    <hr className='text-white' />
                    <Nav.Link >
                        <Link to='/student/studentId/courses' style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '20%' }} className=' text-decoration-none'>
                            <GrTasks className="mx-2" /> Mes cours
                        </Link>
                    </Nav.Link>
                    <div className="d-flex justify-content-center">
                        <hr className="w-50" />
                    </div>
                    {/* Evaluations */}
                    <Nav.Link >
                        <Link to='/student/studentId/courses' style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '20%' }} className=' text-decoration-none'>
                            <PiExamFill className="mx-2" /> Evaluations
                        </Link>
                    </Nav.Link>
                    <div className="d-flex justify-content-center">
                        <hr className="w-50" />
                    </div>
                    {/* Génerer une feuille d'exercices */}
                    <Nav.Link >
                        <Link to='/student/studentId/courses' style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '20%' }} className=' text-decoration-none'>
                            <RiTaskFill className="mx-2" /> Exercices
                        </Link>
                    </Nav.Link>
                    <div className="d-flex justify-content-center">
                        <hr className="w-50" />
                    </div>
                    {/* Résultats d'étudiants */}
                    <Nav.Link >
                        <Link to='/student/studentId/courses' style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '20%' }} className=' text-decoration-none'>
                            <FaQuestion className="mx-2" /> Poser une question
                        </Link>
                    </Nav.Link>
                </Nav>
            </Col>
    )
}

export default SideBarStudent
