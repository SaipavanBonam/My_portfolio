import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css'
import Home1 from './Home1';
import pic from '../images/ayyo.jpg'


function Home()
{
   return (
      <div>
         {/* <img style ={{position:'absolute',zIndex:'-10',height:"1100px"}}src={pic}alt="" /> */}
         <Home1/>
   </div>
   );
}
 export default Home;
