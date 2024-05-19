const IndexEnseignant = () => {
    return (
        <Container>
            <Row className='my-4'>
                <Col md={4} className='my-4'>
                    <Link onClick={handleCreateCours} className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <IoCreate className='fs-1' />
                                <h5>Créer un nouveau cours</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} className='my-4'>
                    <Link onClick={handleCreateFich} className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <FaRegFilePdf className='fs-1' />
                                <h5>Créer une fiche pédagogique</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} className='my-4'>
                    <Link to='/community' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <FaPeopleArrows className='fs-1' />
                                <h5>Visiter la communauté</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} className='my-4'>
                    <Link to='/élèves/profId' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <PiStudentBold className='fs-1' />
                                <h5>Les élèves</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} className='my-4'>
                    <Link to='/planifications/create' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <GrTasks className='fs-1' />
                                <h5>Suivi d'évaluations</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} className='my-4'>
                    <Link to='/planifications/create' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='text-primary'>
                                <FaRocketchat className='fs-1' />
                                <h5>AI-Education Chat</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

return IndexEnseignant