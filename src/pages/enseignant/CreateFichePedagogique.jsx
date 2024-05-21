import { useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { RxLetterSpacing } from "react-icons/rx";
import { IoCreate } from "react-icons/io5";
import FichForm from "../../components/FichForm";
import Test from "../../components/Test";


const CreateFichePedagogique = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ffcccc, #cc99ff)',
        width: '100%',
        height: '100vh',
    };

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
                <h1 className="fs-1" style={{fontFamily: 'serif', fontWeight: 'bold', color: '#0e213d'}}>Générer Une fiche pédagogique</h1>
                <Container>
                    <Test />
                </Container>
            </div>
        </div>
    )
}


export default CreateFichePedagogique