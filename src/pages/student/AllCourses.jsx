import React, { useEffect, useState } from 'react';
import CourseList from '../../components/CourseCard';
import MyNavbar from '../../components/MyNavbar';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MyButtonGroup from '../../components/MyButtonGroup';
import Footer from '../../components/Footer';

const AllCourses = () => {
    // const courses = [
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Python: La formation complète 2024',
    //         description: 'Description for Course 1',
    //         instructor: 'Prof 1',
    //         rating: 4.5,
    //         category: 'Programmation'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Analyse mathématique avancée',
    //         description: 'Description for Course 2',
    //         instructor: 'Prof 2',
    //         rating: 3.2,
    //         category: 'Math'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Structures de données en C',
    //         description: 'Description for Course 3',
    //         instructor: 'Prof 3',
    //         rating: 4.8,
    //         category: 'Programmation'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Java Entreprise Edition',
    //         description: 'Description for Course 3',
    //         instructor: 'Prof 4',
    //         rating: 4.8,
    //         category: 'Programmation'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Apprendre la langue française',
    //         description: 'Description for Course 3',
    //         instructor: 'Prof 5',
    //         rating: 2.8,
    //         category: 'Langues'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Algèbre et espace affine',
    //         description: 'Description for Course 3',
    //         instructor: 'Prof 6',
    //         rating: 4.8,
    //         category: 'Math'
    //     },
    //     {
    //         image: '/images/call-center.png',
    //         title: 'Cours 7',
    //         description: 'Description for Course 3',
    //         instructor: 'Prof 7',
    //         rating: 4.8,
    //         category: 'Langues'
    //     }
    // ];

    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:9090/public/courses'); 
                const data = await response.json();
                console.log("courses"+data);
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
            <div >
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
                {courses && <CourseList courses={selectedCategory ? filteredCourses : courses} />}
            </div>
            <Footer />
        </div>
    );
};

export default AllCourses;