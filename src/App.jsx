import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import { FaBeer } from 'react-icons/fa';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';
import AnswerPage from './pages/AnswerPage ';


function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/question' element={<AnswerPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
