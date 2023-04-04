import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Qualification from './Pages/Qualification';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="AboutUs" element={<AboutUs/>}/>
     <Route path="Qualifications" element={<Qualification/>}/>
      <Route path="Projects"element={<Project/>}/>
      <Route path="Skills"element={<Skills/>}/>
      
    


      </Routes>
      </BrowserRouter>
       
    </div>
  );
}