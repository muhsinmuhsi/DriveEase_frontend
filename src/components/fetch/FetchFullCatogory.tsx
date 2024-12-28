import { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../header/Header'
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from "react-icons/io";
import Footer from '../features/Footer';
import { IoIosArrowRoundForward } from "react-icons/io";
import Reviews from './Reviews';
import toast from 'react-hot-toast';
import { vehicleState } from '../../redux/vehicleSlice';

interface Vehicle {
  _id: string;
  name: string;
  transmission: string;
  fuelType: string;
  seatingCapacity: number;
  image: string;
  pricePerDay: number;
}

type ValidCategory = 'EconomyCar' | 'LuxuryCar';

const FetchCategoryFull = () => {
  const { category } = useParams<{ category: ValidCategory }>();
    const vehicles=useAppSelector((state:{vehicle:vehicleState})=>category?state.vehicle[category]:[])
    const navigate=useNavigate()
    const [showmodal,setShowModal]=useState(false)
    const [vehicleid,setvehicleid]=useState(String)

    const onclose=()=>{
      setShowModal(false)
    }

    const clickHandle=(id:string)=>{
      setShowModal(true)
      setvehicleid(id)
    }

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(vehicles.length / itemsPerPage);

  // Get current items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = vehicles.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const rentnow=()=>{
    navigate('/')
    toast('please select date ⚠️',{
      icon:'😊'
    })

  }

  return (
    <div>
      <Header />
      <div className="pt-20 flex flex-col items-center">
        {currentItems.map((data:Vehicle) => (
       <div className='bg-green-300 w-8/12 m-3 rounded-xl shadow-md'>

        
          <div className="  h-auto rounded-xl p-5 flex justify-around">
            <div>
              <p className="text-xl font-bold">{data.name}</p>
              <div className="flex text-sm font-semibold p-3">
                <p className="pr-2">{data.transmission}</p>
                <p className="pr-2">{data.fuelType}</p>
                <p className="pr-2 ">{data.seatingCapacity}Seat</p>
              </div>
            </div>

            <div className=''>
              <img src={data.image} alt="car-image" className="rounded-xl w-56 h-40 object-fill shadow-md " />
            </div>

          
        </div>
        <div className='flex justify-around pb-8'>
            <div className='flex flex-col '>
                <div className="flex pt-5">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarOutline />
              </div>
              <div>
                <button className='text-green-700 hover:text-blue-600' onClick={()=>clickHandle(data._id)}>see reviews</button>
              </div>
              </div>
              <div className='flex flex-col items-end pr-2'>
                <p className='font-bold '>₹{data.pricePerDay}/Day</p>
                <button className='font-semibold' onClick={()=>rentnow()} >Rent Now <IoIosArrowRoundForward className='inline' /></button>
             </div>
          </div>
      </div>   
        ))}
      </div>

      <div className="flex items-center space-x-2 justify-center pt-16">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button> 
      </div>
      <Reviews isopen={showmodal} 
      onclose={onclose}
      vehicleId={vehicleid}
      />

      <Footer/>
    </div>
  );
}

export default FetchCategoryFull