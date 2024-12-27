import Header from '../components/header/Header'
import Facilities from '../components/features/Facilities';
import FeaturedVehicles from '../components/features/FeaturedVehicles';
import WhyDriveEase from '../components/features/WhyDriveEase';
import "react-datepicker/dist/react-datepicker.css";
import Workflow from "../components/features/Workflow";
import Emailsubscribtion from "../components/features/Emailsubscribtion";
import Datepickerdiv from "../components/features/Datepicker"
import Footer from "../components/features/Footer";
import carrentbanner from '../assets/carrent banner.jpg'

const Home = () => {
    
  return (
    <div>
     <Header/>
     <div className='flex justify-center pt-12 '>
        <img src={carrentbanner}/>
     </div>
        

    
        <Datepickerdiv/>
        <Facilities/>
        <FeaturedVehicles/>
        <WhyDriveEase/>
        <Workflow/>
        <Emailsubscribtion/>
        {/* <CarRentalForm/> */}
        <Footer/>

        
        
       
        
     </div>

    
  
    
  )
}

export default Home