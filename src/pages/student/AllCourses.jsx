import React, { useEffect, useState } from 'react';
import CourseList from '../../components/CourseCard';
import MyNavbar from '../../components/MyNavbar';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MyButtonGroup from '../../components/MyButtonGroup';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    const params = useParams();
    const userId = params.userId;

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:9090/public/courses');
                const data = await response.json();
                console.log(data.data);
                setCourses(data.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const filteredData = courses.filter((course) => course.category === category);
        setFilteredCourses(filteredData);
    };

    return (
        <div>
            <MyNavbar />
            {courses && <div >
                <div className=' mx-4 mt-3' >
                    <h3 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#0e213d' }}>
                        Une large sélection de cours </h3>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '1.2rem' }}>
                        Choisissez parmi plus de 210 de cours. De nouveaux cours sont ajoutés tous les mois
                    </p>
                </div>
                <div className='mx-4 d-flex justify-content-between'>
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={() => handleCategoryChange('Programmation')} style={{ backgroundColor: 'white', borderColor: '#0e213d', color: '#0e213d' }}>
                            Programmation</Button>
                        <Button onClick={() => handleCategoryChange('Math')} style={{ backgroundColor: 'white', borderColor: '#0e213d', color: '#0e213d' }}>Math</Button>
                        <Button onClick={() => handleCategoryChange('Langues')} style={{ backgroundColor: 'white', borderColor: '#0e213d', color: '#0e213d' }}>Langues</Button>
                    </ButtonGroup>
                    <div>
                        <h5 style={{ textDecorationLine: 'underline' }}>{selectedCategory && <>
                            Les cours proposés pour la catégorie <span style={{ color: '#c864c5', fontWeight: 'bolder' }}>{selectedCategory}</span>
                        </>} </h5>
                    </div>
                </div>
                <CourseList courses={selectedCategory ? filteredCourses : courses} userId={userId}/>
            </div>}
            <Footer />
        </div>
    );
};

export default AllCourses;