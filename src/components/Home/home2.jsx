import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import mynew from '../images/homedown.gif'


function homee()
{
    return(
        <div>
             <Container>
                 <Row className='home-write'>
                    <Col md={6}>
                        <img className="img-fluid homologo" src={mynew} alt="hahah" />
                    </Col>
                    <Col md={6} className='need-pad'>
                    <p className="about-para" style={{ fontSize: "1.35rem" }}>Currently thriving as a software enthusiast, <span className="about-name"> I'm </span> deeply passionate about coding,
                    particularly <span className="about-name">N</span>ode.js and <span className="about-name">R</span>eact. When I'm not immersed in the digital realm, 
                    you'll find me indulging in <span className="about-name">Sports </span>,exploring new destinations, and occasionally
                     diving into the captivating world of <span className="about-name">anime </span>. Let's embark on a journey of innovation 
                     and exploration together!</p>
                       
                    </Col>
                </Row> 
            </Container>
        </div>
    )

}
export default homee;