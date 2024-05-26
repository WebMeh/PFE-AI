import { useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { RxLetterSpacing } from "react-icons/rx";
import { IoCreate } from "react-icons/io5";
import ExamForm from "../../components/ExamForm";


const Evaluation = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ffcccc, #cc99ff)',
        width: '100%',
        height: '100vh',
    };

    return (
        <div style={gradientStyle}>
            <Link to='/prof' style={{ backgroundColor: "white", borderColor: 'white' }} className="m-3 btn  text-dark">
                <FaArrowLeft /> Retour
            </Link>
        
            <div className=" d-flex align-items-center justify-content-center p-3">
                <ExamForm />
            </div>
        </div>
    )
}


export default Evaluation