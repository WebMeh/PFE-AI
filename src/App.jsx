import 'bootstrap/dist/css/bootstrap.min.css';
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/question' element={<AnswerPage />} />
        <Route path='/prof' element={<Dashboard />} />
        <Route path='/students/profId' element={<StudentsPage />} />
        <Route path='/cours/profId' element={<Cours />} />
        <Route path='/students/statistics' element={<Statistics />} />
        <Route path='/test' element={<Test />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
