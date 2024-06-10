import React from 'react';
import NavBar from './Navbar';
import Footer from './footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Project'
import About from './components/About/About';

import Skills from './components/Skills/skills';
import pic from "../src/components/images/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return  (
    <Router>
     
    <NavBar/>
    {/* <img style ={{position:'absolute',zIndex:'-2',height:"600px",width:"1300px"}}src={pic}alt="" /> */}
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/resume" element={<Resume/>} /> */}
          <Route path="/skills" element={<Skills/>} />
        </Routes> 
        <Footer/>
   </Router> 

  
  
  );
}
    
   export default App;
 