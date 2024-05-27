import { Button, Col, Row } from "react-bootstrap"
import SideBarStudent from "./SideBarStudent"
import NavbarStudent from "./NavbarStudent"
import Form from 'react-bootstrap/Form';

const ExercicesGenerator = () => {
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


    return (
        <>
            <NavbarStudent />
            <Row>
                <SideBarStudent />
                <Col md={9} >
                    <h4 style={{ fontFamily: 'sans-serif', color: '#0e213d' }}>Pratiquer vos connaissances</h4>
                    <hr className="w-50" />
                    <Row className="g2">
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Choisir le cours</option>
                                {courses.map((course, index) => (
                                    <option value={course.title} key={index}>{course.title}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button variant="success" type="submit">Générer exercices</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ExercicesGenerator