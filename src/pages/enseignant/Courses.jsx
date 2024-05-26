import React from 'react';
import CourseList from '../../components/CourseCard';

const Courses = () => {
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
    <div>
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;