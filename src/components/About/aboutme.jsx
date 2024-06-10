import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import homemonitor from '../images/homemonitor.gif';
import { BiSolidSchool } from "react-icons/bi";
import Education from './educationdetails.';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutme() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Container className="about-cont">
                <Row>
                    <Col md={7}>
                        <h1 className="about-cont"><span className="about-head" style={{ fontSize: "2rem" }}>K</span>now <span className="about-head" style={{ fontSize: "2rem" }}>M</span>ore <span className="about-head" style={{ fontSize: "2rem" }}>A</span>bout <span className="about-head" style={{ fontSize: "2rem" }}>M</span>e</h1>
                        <p className="about-para" style={{ fontSize: "1.35rem" }}>
                            "Hello, I am <span className="about-name">Saipavan Bonam </span> currently pursuing my third year of my B.Tech, 
                            in <i><span className="about-name">LNM </span> institute of information Technology</i>  Alongside my academic journey, <span className="about-name">I </span> am wholeheartedly exploring 
                            the world of <span className="about-name"> web development </span>, driven by a deep fascination for coding and building digital experiences.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img src={homemonitor} alt="Loading" className="img-fluid homemonitor" style={{ maxWidth: "100%", height: "auto" }} />
                    </Col>
                </Row>
            </Container>
            <Container className="about-educ">
                <h1 className="about-educhead" style={{ fontSize: "2rem" }}><span className="about-educspan">M</span>y <span className="about-educspan">E</span>ducation</h1>
                <Education />
            </Container>
        </div>
    );
}

export default Aboutme;
