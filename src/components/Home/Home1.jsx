import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Type from "./Type";
import homelogo from '../images/homenene.gif'
import homedown from '../images/homedown.gif'
import Homee from './home2'
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home1() {
    function openResume(event) {
    
        event.preventDefault();
        // console.log(2+3);
        var resumeUrl = 'https://drive.google.com/file/d/1btXZBDyvCs7pdm7ml_vvgXeVA6RGMebY/view?usp=sharing';
        window.open(resumeUrl, '_blank');
      }
    return (
      
        <div>
            <Container>
                <Row className='home-write'>
                    <Col md={7}>
                        <h1 style={{ fontSize: "2rem" }}>Hi There! </h1>
                        <span className="wave" role="img" aria-labelledby="wave"></span>
                        <h1 style={{ fontSize: "2rem" }} className='home-name1'>I'M <span className="home-name"> SaiPavan Bonam</span></h1>
                        <div className="typewrite">
                            <Type />
                        </div>
                        <button className="vvbutton"onClick={openResume}>My Resume</button>
                    </Col>
                    <Col md={5}>
                        <img className="img-fluid homologo" src={homelogo} alt="hahah" style={{ maxWidth: "80%", height: "auto" }} />
                    </Col>
                </Row>
            </Container>
            
              <Homee/>
           
            <Container style={{ paddingTop: "100px", textAlign: "center" }}>
                <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}><span className="home-name">C</span>onnect <span className="home-name">W</span>ith <span className="home-name">M</span>e <span className="home-name">O</span>n</h2>
                <h5 style={{ textAlign: "center", fontSize: "1rem" }}>Feel at ease to contact me..</h5>
                <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a href="https://twitter.com/SaipavanBonam?t=CR5_ozm044vVrwqZgHmM_A&s=08"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            style={{ color: "black" }} // Set icon color to black
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.linkedin.com/in/saipavan-bonam-00813b27b"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            style={{ color: "black" }} // Set icon color to black
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://instagram.com/saipavan.bonam?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            style={{ color: "black" }} // Set icon color to black
                        >
                            <AiFillInstagram /> 
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.facebook.com/saipavan.bonam.7?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            style={{ color: "black" }} // Set icon color to black
                        >
                            <AiFillFacebook />
                        </a>
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default Home1;
