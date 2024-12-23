import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../header/Header'
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from "react-icons/io";
import Footer from '../features/Footer';
import { IoIosArrowRoundForward } from "react-icons/io";


const FetchCategoryFull = () => {
    const {category}=useParams()
    const vehicles=useAppSelector((state)=>category?state.vehicle[category]:[])
    const navigate=useNavigate()


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

  return (
    <div>
      <Header />
      <div className="pt-20 flex flex-col items-center">
        {currentItems.map((data) => (
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
                <button className='text-green-700 hover:text-blue-600'>see reviews</button>
              </div>
              </div>
              <div className='flex flex-col items-end pr-2'>
                <p className='font-bold '>₹{data.pricePerDay}/Day</p>
                <button className='font-semibold' onClick={()=>navigate('/')} >Rent Now <IoIosArrowRoundForward className='inline' /></button>
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

      <Footer/>
    </div>
  );
}

export default FetchCategoryFull