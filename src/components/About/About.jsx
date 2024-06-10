import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import Aboutme from './aboutme'; 
import pic from '../images/WhatsApp Image 2023-08-19 at 00.38.52.jpg'
import zIndex from '@mui/material/styles/zIndex';
function About() {
  return (
    <div>
        {/* <img style ={{position:'absolute',zIndex:'-2'}}src={pic} alt="" /> */}
      <Aboutme />
    </div>
  );
}

export default About;

