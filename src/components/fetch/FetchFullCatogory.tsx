import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from "react-icons/io";

const FetchCategoryFull = () => {
    const {category}=useParams()
    const vehicles=useAppSelector((state)=>category?state.vehicle[category]:[])
  return (
    <div>
      <Header />
      <div className="pt-20 flex flex-col items-center">
        {vehicles.map((data) => (
          <div className="bg-green-100 w-1/2 h-auto shadow-sm rounded-xl m-3 p-5">
            <div>
              <p className="text-xl font-bold">{data.name}</p>
              <div className="flex text-sm font-semibold p-3">
                <p className="pr-2">{data.transmission}</p>
                <p className="pr-2">{data.fuelType}</p>
                <p className="pr-2 ">{data.seatingCapacity}Seat</p>
              </div>
            </div>
            <div>
              <img src={data.image} alt="car-image" className="rounded " />
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
                <p>{data.pricePerDay}</p>
                <button >Rent Now </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchCategoryFull