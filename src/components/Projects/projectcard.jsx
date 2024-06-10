import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import '../../styles.css'

function Projectcard(props) {
    return (
        <div>
            <Card className="project-card-view">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>

                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        Github
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Projectcard;
