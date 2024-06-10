import React,{useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import { AiOutlineHome } from "react-icons/ai";
import {BiSolidSchool} from  "react-icons/bi";
import {PiGraduationCapFill,PiExamBold} from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Timeline()
{
  useEffect(() => {
    AOS.init({
      twice: true,
      duration: 100,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
    
  }, []);
  return(
    <VerticalTimeline >
      <VerticalTimelineElement data-aos="fade-right" 
    
        className="vertical-timeline-element--work timeline-educ" 
      contentStyle={{ background: '#2C3539', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #7fffd4' }}
      
       iconStyle={{ background: '#7fffd4', color: 'black' }}
       icon={<BiSolidSchool/>}>



        <h1 style ={{justifyContent:"center"}}><span className ="about-head" >M</span>atriculation</h1>
        <p> <i>Bhashayam public school </i>,
        Bhimavaram Andhra Pradesh</p>
        <h5 style ={{marginTop:"20px"}}>CGPA : 10</h5>
        <p className="vertical-timeline-element-date">2018-2019</p> 
     
   





      </VerticalTimelineElement>
      <VerticalTimelineElement data-aos="fade-left"
     
      className="vertical-timeline-element--work timeline-educ" 
      contentStyle={{ background: '#2C3539', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #7fffd4' }}
      
       iconStyle={{ background: '#7fffd4', color: 'black' }}
       icon={<PiExamBold/>}>



        <h1 style ={{justifyContent:"center"}}><span className ="about-head" >I</span>ntermediate</h1>
        <p> <i>Bhashyam Aditya CO Campus</i>,
       Guntur Andhra Pradesh</p>
        <h5 style ={{marginTop:"20px"}}>Percentage: 97.6% </h5>
        <p className="vertical-timeline-element-date">2019-2021</p> 
  
      </VerticalTimelineElement>

      <VerticalTimelineElement data-aos="fade-right"
   
       className="vertical-timeline-element--work timeline-educ" 
       contentStyle={{ background: '#2C3539', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  #7fffd4' }}
       
        iconStyle={{ background: '#7fffd4', color: 'black' }}
        icon={<PiGraduationCapFill/>}>
 
 
 
         <h1 style ={{justifyContent:"center"}}><span className ="about-head" >B</span>-Tech(Ece)</h1>
         <p> <i>LNM instituite of information technology</i>,
         Jaipur Rajasthan</p>
         <h5 style ={{marginTop:"20px"}}>CGPA: 8.29 </h5>
         <p className="vertical-timeline-element-date">2021-present</p> 
   

       
      </VerticalTimelineElement>
    </VerticalTimeline>
      
  );
}
export default  Timeline;