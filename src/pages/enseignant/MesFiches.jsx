import { useState, useEffect } from "react";
import { Alert, Col, Container, Modal, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SideBarProf from "../../components/SideBarProf";
import NavbarProf from "../../components/NavbarProf";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import FichForm from "../../components/FichForm";

const FicheCard = ({ fiche }) => {
    const handleClick = () => {
        // const filePath = `[BASE_URL_FOR_PDFS]${fiche.filename}`; // Replace with your actual base URL
        const filePath = `/fiches/test.pdf`; // Replace with your actual base URL
        window.open(filePath, '_blank'); // Open in new tab
    };

    return (
        <div className="card m-2" style={{ width: "300px" }}>
            <div className="card-header text-center">enregistrée le {fiche.uploadedAt}</div>
            <div className="card-body">
                <h2 className="card-title">T{fiche.filename}</h2>
                <p className="card-text">Une fiche technique pour le cours" <b>example</b>".</p>
                <Link onClick={handleClick} class="btn btn-primary">Voir la fiche</Link>
            </div>
        </div>
    );
};

const CourseList = ({ fiches }) => {
    return (
        <Row className=" p-4 mx-2">
            {fiches.map((fiche, index) => (
                <FicheCard key={index} fiche={fiche} />
            ))}
            {fiches.map((fiche, index) => (
                <FicheCard key={index} fiche={fiche} />
            ))}
        </Row>
    );
};

const MesFiches = () => {
    const params = useParams();
    const teacherId = params.teacherId;
    const [userDetails, setUserDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [fiches, setFiches] = useState([]);
    const [showCreateFichForm, setShowCreateFichForm] = useState(false)


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

        const fetchFiches = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:9090/fiche/all/${teacherId}`);
                setFiches(response.data);
                console.log("Fiches of techear n° " + teacherId + ": ")
                console.log(fiches[0])
            } catch (error) {
                console.error('Error fetching fiches:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
        fetchFiches();
    }, []);

    const handleCreateFich = () => {
        setShowCreateFichForm(true);
    };
    return (
        <Container fluid>
            <Row style={{ height: '100vh' }}>
                {/* SideBar Prof */}
                <SideBarProf prof={userDetails} />
                <Col md={10}>
                    {/* Navbar Prof */}
                    <NavbarProf prof={userDetails} />
                    <Container>
                        <Row className=''>
                            <div className="d-flex justify-content-between mt-3">
                                <h3>Mes planifications</h3>
                                <Link onClick={handleCreateFich}
                                    className="btn " style={{ backgroundColor: "#0e213d", color: 'white' }}>
                                    <FaPlus size={20} className="mx-1" />Nouvelle fiche
                                </Link>
                            </div>
                            <hr className='w-50' />
                            <div className="d-flex justify-content-center">
                                {isLoading && <p>Loading fiches</p>}
                                {fiches.length <= 0 ? <div className='my-4 d-flex justify-content-center'>
                                    <Alert className='my-4' variant='warning'>Vous n'avez aucune fiche !
                                        <Link to={'/create-course/prof/' + teacherId} className='mx-3'> Publier un nouvelle planification</Link>
                                    </Alert>
                                </div> : <CourseList fiches={fiches} />}
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
            {/* Modal pour créer nouvelle fiche pédagogique */}
            <Modal show={showCreateFichForm} onHide={() => setShowCreateFichForm(false)} centered size='lg'>
                <Modal.Header closeButton className='text-center'>
                    <Modal.Title className='text-center' style={{ color: "#c864c5", fontWeight: 'bolder' }}>
                        Planifiez une séance</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FichForm />
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default MesFiches