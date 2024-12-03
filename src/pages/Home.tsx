import React, { useState } from "react";
import Header from '../components/header/Header'
import Facilities from '../components/features/Facilities';
import FeaturedVehicles from '../components/features/FeaturedVehicles';
import WhyDriveEase from '../components/features/WhyDriveEase';
import "react-datepicker/dist/react-datepicker.css";
import Workflow from "../components/features/Workflow";
import Emailsubscribtion from "../components/features/Emailsubscribtion";
import Datepickerdiv from "../components/features/Datepicker"
import Footer from "../components/features/Footer";

const Home = () => {
    
  return (
    <div>
     <Header/>
     <div className='flex justify-center '>
        <img src="https://www.evmwheels.com/uploads/banner/car/1731700506.jpg" alt="car image" className="rounded-3xl pt-28 "/>
     </div>
        

    
        <Datepickerdiv/>
        <Facilities/>
        <FeaturedVehicles/>
        <WhyDriveEase/>
        <Workflow/>
        <Emailsubscribtion/>
        <Footer/>

        
        
       
        
     </div>

    
  
    
  )
}

export default Home