
import Header from '../components/header/Header';
import Facilities from '../components/features/Facilities';
import FeaturedVehicles from '../components/features/FeaturedVehicles';
import WhyDriveEase from '../components/features/WhyDriveEase';
import "react-datepicker/dist/react-datepicker.css";
import Workflow from "../components/features/Workflow";
import Emailsubscribtion from "../components/features/Emailsubscribtion";
import Datepickerdiv from "../components/features/Datepicker";
import Footer from "../components/features/Footer";
import carrentbanner from '../assets/carrent banner.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center">
        <img 
          src={carrentbanner} 
          alt="Car Rent Banner" 
           
        />
      </div>
      <div className="px-4 md:px-8 lg:px-16">
        <Datepickerdiv />
        <Facilities />
        <FeaturedVehicles />
        <WhyDriveEase />
        <Workflow />
        <Emailsubscribtion />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
