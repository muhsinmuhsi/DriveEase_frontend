import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import axios from 'axios'
import Header from '../header/Header'
import { vehicleSchema } from '../../redux/vehicleSlice';
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Availablevehicles = () => {
  const pickupdate=useAppSelector(state=>state.dateslice.pickupDate)
  const dropoffdate=useAppSelector(state=>state.dateslice.dropoffDate)

  const [availablevehicles, setavailablevehicles] = useState<vehicleSchema[]>([]);
  
useEffect(()=>{
  const fetchavailblevehicles=async()=> {
    console.log('this i s async function from availablevehicles');
    
    try {
      const response=await axios.post('http://localhost:8080/api/users/availablevehicles',
        {pickupDate:pickupdate,dropofDate:dropoffdate},
        {
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true
        }
      )
      setavailablevehicles(response.data.checkAvaillity|| [])
      
      
    } catch (error) {
      console.log(error)
    }

   }
   if (pickupdate && dropoffdate) {
    fetchavailblevehicles();
  }
},[])
   

  return (
    <div className=''>
     <Header/>
     <div className='pt-20 flex '>
      <div className='w-1/2 h-screen overflow-y-scroll'>
        {
        availablevehicles?.map((data: vehicleSchema, index: number)=>(
          <div className='bg-white rounded-lg  flex  m-2  justify-around shadow-lg '>
            <div className='flex flex-col justify-around p-5'>
              <h1 className='text-xl font-semibold '>{data.name}</h1>
              <div  className='flex text-sm font-semibold pt-2'>
                <p className='pr-3'><GiGearStickPattern className='inline pr-1'/>{data.transmission}</p>
                <p className='pr-3'><BsFuelPump className='inline pr-1' />{data.fuelType}</p>
                <p className='pr-3'><MdOutlineAirlineSeatReclineNormal className='inline pr-1'/>{data.seatingCapacity}Seat</p>
              </div>
              <div className='flex justify-around items-center '>
                <p className='text-lg font-bold'><RiMoneyRupeeCircleFill className='inline pr-1'/>{data.pricePerDay}/Day</p>
                <Link to={`/vehicle/${data._id}`}><button className='bg-green-600 hover:bg-green-800 rounded-xl p-2 ' >Select</button></Link>
              </div>
            </div>
            <div>
              <div>
                <img src={data.image} alt="" className='w-72 h-52 rounded object-contain' />
              </div>
              <div>

              </div>
              

            </div>
            
          </div>
        ))

      }
      </div>
      <div>
        <p>this is for filtering option </p>
      </div>
     </div>
    </div>
  )
}

export default Availablevehicles