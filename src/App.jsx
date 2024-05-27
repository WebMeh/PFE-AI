import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyNavbar from './components/MyNavbar';
import { FaBeer } from 'react-icons/fa';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';
import AnswerPage from './pages/AnswerPage ';
import Dashboard from './pages/enseignant/Dashboard ';
import StudentsPage from './pages/enseignant/StudentsPage';
import Statistics from './pages/enseignant/Statistics';
import Test from './components/Test';
import Cours from './pages/Cours';
import FichePedagogique from './pages/FichePedagogique';
import CreateFichePedagogique from './pages/enseignant/CreateFichePedagogique';
import FichForm from './components/FichForm';
import Data from './pages/Data';
import Evaluation from './pages/enseignant/Evaluation';
import Courses from './pages/enseignant/Courses';
import CourseCarousel from './CourseCarousel';
import AllCourses from './pages/student/AllCourses';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentCourses from './pages/student/StudentCourses';
import MyEvaluation from './pages/student/Evaluation';
import StudentExamsList from './pages/student/StudentExamsLis';
import ExercicesGenerator from './pages/student/ExercicesGenerator';
import Welcome from './Welcome';


function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/cours' element={<AllCourses />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/question' element={<AnswerPage />} />
        <Route path='/student' element={<StudentDashboard />}/>
        <Route path='/student/studentId/courses' element={<StudentCourses />} />
        <Route path='/student/studentId/evaluations' element={<StudentExamsList />} />
        <Route path='/student/studentId/exercices/generate' element={<ExercicesGenerator />} />
        <Route path='/student/studentId/evaluations/evaluationId' element={<MyEvaluation />} />
        <Route path='/prof' element={<Dashboard />} />
        <Route path='/students/profId' element={<StudentsPage />} />
        <Route path='/cours/create' element={<Cours />} />
        <Route path='/prof/cours' element={<Courses />} />
        <Route path='/students/statistics' element={<Statistics />} />
        <Route path='/fiche-pedagogique' element={<CreateFichePedagogique />} />
        <Route path='/fiche-pedagogique-pdf' element={<FichePedagogique />} />
        <Route path='/exam/create' element={<Evaluation />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/data' element={<Data />} />
        <Route path='/coco' element={<CourseCarousel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App