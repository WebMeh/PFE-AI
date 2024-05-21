import { useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { RxLetterSpacing } from "react-icons/rx";
import { IoCreate } from "react-icons/io5";


const Cours = () => {
    const [selectedLangageOptions, setSelectedLangageOptions] = useState(null)
    const gradientStyle = {
        background: 'linear-gradient(to right, #ffcccc, #cc99ff)',
        width: '100%',
        height: '100vh',
    };


    const langageOptions = [
        { value: 'fr', label: 'Français' },
        { value: 'eng', label: 'Anglais' },
        { value: 'arabe', label: 'اللغة العربية' },
    ];

    const specialityOptions = [
        { value: 'algo', label: 'Algorithmique' },
        { value: 'Lang', label: 'Les langues' },
        { value: 'math', label: 'Mathématique' },
        { value: 'arabe', label: 'اللغة العربية' },
    ];


    const levelOptions = [
        {value: 'primaire', label: 'Primaire'},
        {value: 'secondaire', label: 'Secodaire'},
        {value: 'qualifiant', label: 'Qualifiant'},
        {value: 'universitaire', label: 'Universitaire'}
    ]

    return (
        <div style={gradientStyle}>
            <Link to='/prof' style={{ backgroundColor: "white", borderColor: 'white' }} className="m-3 btn  text-dark">
                <FaArrowLeft /> Retour
            </Link>
            <div className=" d-flex align-items-center justify-content-center flex-column p-3">
                <h1 className="fs-1" style={{fontFamily: 'serif', fontWeight: 'bold', color: '#0e213d'}}>Générer</h1>
                <p style={{color: '#0e213d'}}>Qu'aimeriez-vous créer aujourd'hui ?</p>
            </div>
            <div className=" d-flex align-items-center justify-content-center p-3">
                <div style={{ width: '15%' }} className="mx-2">
                    <Select
                        placeholder='Choisir la langue'
                        options={langageOptions}

                    />
                </div>
                <div style={{ width: '15%' }} className="mx-2">
                    <Select
                        placeholder='Choisir le niveau'
                        options={levelOptions}

                    />
                </div>

            </div>
            <div className=" d-flex align-items-center justify-content-center p-3">

                <Button variant="success" className="mx-1" style={{ borderRadius: '40%' }}>
                    MATH
                </Button>
                <Button variant="danger" className="mx-1" style={{ borderRadius: '40%' }}>
                    PHYSIQUE
                </Button>
                <Button variant="info" className="mx-1" style={{ borderRadius: '40%' }}>
                    INFORMATIQUE
                </Button>
            </div>
            <div className=" d-flex align-items-center justify-content-center p-3">
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        className="p-4"
                        placeholder="Entrer le nom du chapitre à générer"
                        aria-label="Message"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                        <FaPaperPlane />
                    </InputGroup.Text>
                </InputGroup>
            </div>
            <div className=" d-flex align-items-center justify-content-center p-3">
                <hr style={{ color: 'gray', width: '20%', border: '1px solid gray', marginRight: '8px' }} />
                Exemples d'invites
                <hr style={{ color: 'gray', width: '20%', border: '1px solid gray', marginLeft: '8px' }} />
            </div>
            <Container>
                <Row >
                    <Col md={3} className=''>
                        <Link  className='text-decoration-none'>
                            <Card>
                                <Card.Body className='fs-6'>
                                    <IoCreate className='fs-1' />
                                    <i>Invite de commande selon la spécilaité choisie</i>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} className=''>
                        <Link  className='text-decoration-none'>
                            <Card>
                                <Card.Body className='fs-6'>
                                    <IoCreate className='fs-1' />
                                    <i>Invite de commande selon la spécilaité choisie</i>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} className=''>
                        <Link  className='text-decoration-none'>
                            <Card>
                                <Card.Body className='fs-6'>
                                    <IoCreate className='fs-1' />
                                    <i>Invite de commande selon la spécilaité choisie</i>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} className=''>
                        <Link  className='text-decoration-none'>
                            <Card>
                                <Card.Body className='fs-6'>
                                    <IoCreate className='fs-1' />
                                    <i>Invite de commande selon la spécilaité choisie</i>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Cours