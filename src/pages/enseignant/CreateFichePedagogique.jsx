import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { RxLetterSpacing } from "react-icons/rx";
import { IoCreate } from "react-icons/io5";
import FichForm from "../../components/FichForm";
import Test from "../../components/Test";
import { useParams } from "react-router-dom";
import NavbarProf from "../../components/NavbarProf";
import SideBarProf from "../../components/SideBarProf";


const CreateFichePedagogique = () => {
    const params = useParams();
    const teacherId = params.teacherId;
    const [userDetails, setUserDetails] = useState(null)


    const gradientStyle = {
        background: 'linear-gradient(to right, #ffcccc, #cc99ff)',
        width: '100%',
        height: '100vh',
    };

    const levelOptions = [
        { value: 'primaire', label: 'Primaire' },
        { value: 'secondaire', label: 'Secodaire' },
        { value: 'qualifiant', label: 'Qualifiant' },
        { value: 'universitaire', label: 'Universitaire' }
    ]

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
        fetchUser();
    }, []);

    return (
        <>
            <div style={gradientStyle}>
                <Link to='/prof' style={{ backgroundColor: "white", borderColor: 'white' }} className="m-3 btn  text-dark">
                    <FaArrowLeft /> Retour
                </Link>
                <div className=" d-flex align-items-center justify-content-center flex-column p-3">
                    <h1 className="fs-1" style={{ fontFamily: 'serif', fontWeight: 'bold', color: '#0e213d' }}>
                        Welcom teacher N° {teacherId} Générer Une fiche pédagogique</h1>
                    <Container>
                        <Test />
                    </Container>
                </div>
            </div>
        </>

    )
}


export default CreateFichePedagogique