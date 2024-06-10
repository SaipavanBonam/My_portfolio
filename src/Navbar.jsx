import React, { useState } from "react";
import "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsBook } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import '../src/styles.css';
import logo from "./components/images/sp-logoo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  return (
    <div>
      <Navbar
        expand="md" className="bg-body-tertiary navbar-font"
        expanded={expand}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            style={{ backgroundColor: '#2C3539' }} // Adjust the background color here
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#Home">
              <Nav.Item>
                <Nav.Link className="nav-link text-white"
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link text-white"
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <BsPerson style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="nav-link text-white"
                  as={Link}
                  to="/skills"
                  onClick={() => updateExpanded(false)}
                >
                  <BsBook style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link text-white"
                  as={Link}
                  to="/projects"
                  onClick={() => updateExpanded(false)}
                >
                  <LiaProjectDiagramSolid style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
               </Nav.Item>
              {/*<Nav.Item>
                <Nav.Link className="nav-link text-white"
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <BiNotepad style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
