import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import {Container,Row,Col} from 'react-bootstrap';
import { CgCPlusPlus } from "react-icons/cg";
import {FaDev} from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {SiArduino,SiMysql,SiVisualstudiocode}from "react-icons/si";
import {PiAtom} from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Talent()
{
  useEffect(() => {
    AOS.init(); 
  }, []);
   return (
    <div>
       <Container  className = "skills-top" style ={{justifyContent:"center"}}>
       <h1 className ="skills-head"><i>Proessional Skill Set </i></h1>
       <Container className ="talent-frontend">
       <Row>
       <Col xs ={6} md ={3} className ="talent-icons temper"  data-aos="fade-right">
         <CgCPlusPlus/>
         <h4>C++</h4>
       </Col>
       <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-down"> 
         <DiJavascript1/>
         <h4>Javascript</h4>
       </Col>
       <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-left">
         <DiReact/>
         <h4>React</h4>
       </Col>
       <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-right">
         <DiNodejs/>
         <h4>Nodejs</h4>
       </Col>
       <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-up">
         <SiMysql/>
         <h4>My SQL</h4>
       </Col>
       <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-left">
         <SiArduino/>
         <h4>Arduino</h4>
       </Col>
       </Row>
       </Container>


        <h1>Tools I Use</h1>
        <Container fluid>
        <Row>
        <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-right">
         <SiVisualstudiocode/>
         <h4>VsCode</h4>
         </Col> 
         <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-up">
         <PiAtom/>
         <h4>Atom</h4>
         </Col>
         <Col xs ={6} md ={3} className ="talent-icons" data-aos="fade-left">
         <FaDev/>
         <h4>Dev C++</h4>
        </Col>
       </Row>
        {/* </Container>
       <h1>Achievments</h1>
       <Container> */}

       </Container>
       
      


      
        

       </Container>
        
    </div>
    
   );
    
}
export default Talent;