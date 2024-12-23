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
  const [filterdAvailableVehicles, setfilterdAvailableVehicles] = useState<vehicleSchema[]>(availablevehicles);
  
  useEffect(() => {
    const fetchAvailableVehicles = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/users/availablevehicles',
          { pickupDate: pickupdate, dropofDate: dropoffdate },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true
          }
        );
        const vehicles = response.data.checkAvaillity || [];
        setavailablevehicles(vehicles);
        setfilterdAvailableVehicles(vehicles); // Set filtered vehicles to all fetched vehicles
      } catch (error) {
        console.log(error);
      }
    };
  
    if (pickupdate && dropoffdate) {
      fetchAvailableVehicles();
    }
  }, [pickupdate, dropoffdate]); // Include dependencies to re-run on date changes
  
   

const filterVehicles=(filter:string)=>{
  const FilterdVehicle=availablevehicles.filter(vehicle=>vehicle.type===filter)
  setfilterdAvailableVehicles(FilterdVehicle)
}

  return (
    <div className=''>
     <Header/>
     <div className='pt-20 flex flex-col items-center '>
      <div className=''>

        <button onClick={()=>setfilterdAvailableVehicles(availablevehicles)} className='px-2 py-1 hover:bg-green-300 m-2 rounded-xl border border-green-300'>All</button>
        <button onClick={()=>filterVehicles('sedan')} className='px-2 py-1 hover:bg-green-300 m-2 rounded-xl border border-green-300'>sedan</button>
        <button onClick={()=>filterVehicles('Hatchback')} className='px-2 py-1 hover:bg-green-300 m-2 rounded-xl border border-green-300'>Hatchback</button>
        <button onClick={()=>filterVehicles('SUV')} className='px-2 py-1 hover:bg-green-300 m-2 rounded-xl border border-green-300'>SUV</button>
        <button onClick={()=>filterVehicles('Sports Car')} className='px-2 py-1 hover:bg-green-300 m-2 rounded-xl border border-green-300' >Sports Car</button>
      </div>
      <div className='w-8/12 '>
        {
        filterdAvailableVehicles?.map((data: vehicleSchema)=>(
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
     </div>
    </div>
  )
}

export default Availablevehicles