import React, { useEffect, useState } from 'react';
import { Form, Button, ProgressBar, InputGroup, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { CiSaveUp2 } from "react-icons/ci";
import { IoMdAddCircleOutline, IoIosCloudDone } from "react-icons/io";
import { MdAddChart } from "react-icons/md";
import { GrCaretPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const FichForm = () => {
    const [step, setStep] = useState(1);
    const [classRoom, setClassRoom] = useState('');
    const [duration, setDuration] = useState('');
    const [moduleName, setModuleName] = useState('test');
    const [chapterName, setChapterName] = useState('');
    const [level, setLevel] = useState('');
    const [objectives, setObjectives] = useState(['']);
    const [prerequisites, setPrerequisites] = useState(['']);
    const [materials, setMaterials] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [text, setText] = useState('');
    const objectifsText = "Les objectifs d'apprentissage";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setText(objectifsText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === objectifsText.length) {
                currentIndex = 0;
            }
        }, 200);

        return () => clearInterval(interval);
    }, [objectifsText]);



    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'classRoom':
                setClassRoom(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'moduleName':
                setModuleName(value);
                break;
            case 'chapterName':
                setChapterName(value);
                break;
            case 'level':
                setLevel(value);
                break;
            case 'materials':
                setMaterials(value);
                break;
            case 'question1':
                setQuestion1(value);
                break;
            case 'question2':
                setQuestion2(value);
                break;
            case 'question3':
                setQuestion3(value);
                break;
            default:
                break;
        }
    };

    const handleAddObjective = () => {
        setObjectives([...objectives, '']);
    };

    const handleAddprerequisite = () => {
        setPrerequisites([...prerequisites, '']);
    };

    const handleObjectiveChange = (index, value) => {
        const updatedObjectives = [...objectives];
        updatedObjectives[index] = value;
        setObjectives(updatedObjectives);
    };

    const handlePrerequisitesChange = (index, value) => {
        const updatedPrerequisites = [...prerequisites];
        updatedPrerequisites[index] = value;
        setPrerequisites(updatedPrerequisites);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            classRoom,
            duration,
            moduleName,
            chapterName,
            level,
            objectives,
            materials,
            prerequisites,
            question1,
            question2,
            question3,
        };
        navigate('/fiche-pedagogique-pdf', { state: formData });
    };
    return (
        <Form onSubmit={handleSubmit}>
            {step === 1 && (
                <>
                    <h3 className='text-center' style={{ color: '#c864c5', fontFamily: 'Brush Script M, cursive' }}>I- Identification</h3>
                    <ProgressBar now={33} className='mb-2' />

                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Nom d'établissement">
                                <Form.Control type="text" placeholder="Exemple: FST Beni Mellal" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Etablissement est une "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Séléctionnez le niveau</option>
                                    <option value="1">Faculté</option>
                                    <option value="2">Lycée</option>
                                    <option value="3">Collège</option>
                                    <option value="4">école primmaire</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2 my-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Le module (matière)">
                                <Form.Control type="text" placeholder="Exemple: FST Beni Mellal" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Chapitre du module "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Séléctionnez le chapitre</option>
                                    <option value="1">Chapitre 1</option>
                                    <option value="2">Chapitre 2</option>
                                    <option value="3">Chapitre 3</option>
                                    <option value="4">chapitre personnaliser
                                    </option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-3 my-2">
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="La durée "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Séléctionnez durée de la séance</option>
                                    <option value="1">1H</option>
                                    <option value="2">2H</option>
                                    <option value="3">3H</option>
                                    <option value="4">4H
                                    </option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="La classe (Section) "
                            >
                                <Form.Select aria-label="Floating label select example" value={classRoom} onChange={(e) => setClassRoom(e.target.value)}>
                                    <option>Séléctionnez la classe</option>
                                    <option value="classe1">Classe 1</option>
                                    <option value="classe2">Classe 2</option>
                                    <option value="classe3">Classe 3</option>
                                    <option value="classe4">Toutes les classes
                                    </option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end ">

                        <Button variant="primary" onClick={nextStep} className='mt-2'>
                            Suivant
                            <TbPlayerTrackNextFilled className='mx-2' />
                        </Button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <h3 className='text-center' style={{ color: '#c864c5', fontFamily: 'Brush Script M, cursive' }}>II- Objectifs et Prérequis</h3>

                    <ProgressBar now={66} />
                    <div className='d-flex justify-content-between  mt-2 '>
                        <div>
                            <h5 className=" animated-text" style={{ color: '#c864c5' }}>{text}</h5>
                        </div>
                        <div>
                            Nouveau <MdAddChart onClick={handleAddObjective} className='fs-3' style={{ color: 'purple' }} />
                        </div>
                    </div>
                    {objectives.map((objective, index) => (
                        <InputGroup key={index} className="my-3">
                            <Form.Control
                                type="text"
                                placeholder={`Objectif ${index + 1}`}
                                value={objective}
                                onChange={(e) => handleObjectiveChange(index, e.target.value)}
                            />
                        </InputGroup>
                    ))}


                    {/*  les autres champs de l'étape 2 ici */}
                    <hr />
                    <div className='d-flex justify-content-between  mt-2 '>
                        <div>
                            <h5 className=" animated-text" style={{ color: '#c864c5' }}>Les prérequis:</h5>
                        </div>
                        <div>
                            Nouveau <MdAddChart onClick={handleAddprerequisite} className='fs-3' style={{ color: 'purple' }} />
                        </div>
                    </div>
                    {prerequisites.map((prerequis, index) => (
                        <InputGroup key={index} className="my-3">
                            <Form.Control
                                type="text"
                                placeholder={`Prérequis ${index + 1}`}
                                value={prerequis}
                                onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
                            />
                        </InputGroup>
                    ))}

                    <div className="d-flex justify-content-between">
                        <Button variant="success" onClick={prevStep} className='mt-2'>
                            <GrCaretPrevious className='mx-2' />
                            Précédent
                        </Button>
                        <Button variant="primary" onClick={nextStep} className='mt-2'>
                            Suivant
                            <TbPlayerTrackNextFilled className='mx-2' />
                        </Button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <h3 className='text-center' style={{ color: '#c864c5', fontFamily: 'Brush Script M, cursive' }}>III- Déroulement </h3>

                    <ProgressBar now={100} />
                    <Row className="g-3 my-2">
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="La durée "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Phase de motivation</option>
                                    <option value="1">5min</option>
                                    <option value="2">10min</option>
                                    <option value="3">15min</option>
                                    <option value="4">20min
                                    </option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="La durée "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Construction des savoir</option>
                                    <option value="1">20% de la séance</option>
                                    <option value="2">40% de la séance</option>
                                    <option value="3">50% de la séance</option>
                                    <option value="4">60% de la séance</option>
                                    <option value="4">80% de la séance</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="La durée "
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Evaluation</option>
                                    <option value="1">10% de la séance</option>
                                    <option value="2">20% de la séance</option>
                                    <option value="3">30% de la séance</option>
                                    <option value="4">40% de la séance</option>
                                    <option value="4">50% de la séance</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                        <Button variant="success" onClick={prevStep} className='mt-2'>
                            <GrCaretPrevious className='mx-2' />
                            Précédent
                        </Button>
                        <Button type="submit" variant="primary" className='mt-2'>
                            Soumettre
                            <CiSaveUp2 className='mx-2' />
                        </Button>
                    </div>

                </>
            )}
        </Form>
    );
};

export default FichForm;