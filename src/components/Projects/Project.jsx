import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectcard from './projectcard';
import drum from '../images/finadrum.jpg';
import memorycard from '../images/finamemory.jpg'
import todo from '../images/todo.png'
import userlogin from '../images/userlogin.jpg'
import amul from '../images/amulparlour.jpg'
import { Col, Container,Row } from 'react-bootstrap';
import '../../styles.css'
function Project() {
  return (
    <div>
     <Container  className ="project-section">
       <Container>
        <h1>My recent Projects</h1>
       </Container>
      <Row style ={{paddingBottom: "10px" }}>
      <Col md={4}  className = "project-card">
          <Projectcard
           imgPath ={amul}
           title = "amul-parlour"
           description = "Indulge in delicious,mouth-watering delights at our center! We offer a wide range of delectable dishes, from crispy burgers to savory fries and refreshing beverages,to satisfy your cravings. "
           ghLink ="https://github.com/SaipavanBonam/Amul_parlour"
           imgHeight="300px"
          />
        </Col>
        <Col md={4}  className = "project-card">
          <Projectcard
           imgPath ={drum}
           title = "DrumKit"
           description ="Enjoy freely accessible personal drums for your pleasure,designed for everyone's enjoyment.These drums are created with the sole purpose of providing free and boundless enjoyment to all."
           ghLink ="https://github.com/SaipavanBonam/Drum-kit"
           imgHeight="300px"
          />
        </Col>
        <Col md={4}  className = "project-card">
          <Projectcard
           imgPath ={memorycard}
           title = "memory-game"
           description ="Challenge your memory with this classic card-matching game! Flip over cards to find matching pairs within a time limit. Test your cognitive skills and improve your memory while having fun!"
           ghLink ="https://github.com/SaipavanBonam/memory-card-game"
           imgHeight="300px"
          />
        </Col>
        <Col md={4}  className = "project-card">
          <Projectcard
           imgPath ={userlogin}
           title = "user-authentication"
           description = "user-friendly providing clear and concise error messages that describe the issue and suggest corrective actions. This enhances user experience by making it easy to understand and resolve login problems."
           ghLink ="https://github.com/SaipavanBonam/user_login"
           imgHeight="300px"
          />
        </Col>
        <Col md={4}  className = "project-card">
          <Projectcard
           imgPath ={todo}
           title = "To-Do List"
           description = "Manage your tasks efficiently with this intuitive Todo List application/website. Stay organized and on top of your daily activities by creating, editing, marking, and deleting tasks as needed and enjoy"
           ghLink ="https://github.com/SaipavanBonam/Todo--list"
           imgHeight="300px"
          />
        </Col>
        
      </Row>
     </Container>
    </div>
  );
}

export default Project;
