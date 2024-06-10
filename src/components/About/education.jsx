import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidSchool } from "react-icons/bi";
import { Card } from 'react-bootstrap';
import '../../../src/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="event-date">{event.date}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

