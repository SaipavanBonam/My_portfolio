import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './styles.css';
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container  fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by saipavanbonam</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SaipavanBonam"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/SaipavanBonam?t=CR5_ozm044vVrwqZgHmM_A&s=08"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/saipavan-bonam-00813b27b"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/saipavan.bonam?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
