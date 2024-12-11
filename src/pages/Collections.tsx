import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import headerimg from '.././assets/Black  and White Modern Car Sale Facebook Post.png'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addEconomyvehicle, addLuxuryVehicle, vehicleSchema } from '../redux/vehicleSlice'
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from "react-icons/io"; 
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Collections = () => { 
  const dispatch=useAppDispatch();
  const vehicleeEconomy=useAppSelector((state)=>state.vehicle.EconomyCar)
  const vehicleLuxury=useAppSelector((state)=>state.vehicle.LuxuryCar)

 const fourVehicleEconomy=vehicleeEconomy.slice(0,4)
 const fourVehicleLuxury=vehicleLuxury.slice(0,4)

  useEffect(() => {
    const fetchVehicles = async () => {
      const economyCars = await vehicleByCategory("EconomyCar");
      if (economyCars) {
        dispatch(addEconomyvehicle(economyCars)); // Dispatch only if data exists
      }

      const LuxuryCars = await vehicleByCategory('Luxury')
      if(LuxuryCars){
        dispatch(addLuxuryVehicle(LuxuryCars));
      }
    };

    fetchVehicles();

    
  }, [dispatch]); // Add dependencies here

  const vehicleByCategory = async (category: string): Promise<vehicleSchema[] | undefined> => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/vehicles/category/${category}`);
      console.log(response.data.data, "this from collection");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      return undefined; // Handle error case
    }
  };
  

  
  
  return (
    <div>
      <Header/>

      <div className='flex justify-center pb-32 border border-b-black'>
        <img src={headerimg} alt="cat-image" />
      </div>
      <div>
        <div className=''>
          <h1 className='text-3xl md:text-5xl font-bold text-center p-6 '>Economy Car's</h1>
        </div>
        <div className=' flex flex-col border border-b-black '>
          <div className=' flex  justify-center mt-14 '>
          {
            fourVehicleEconomy.map((data)=>(
              <div className='bg-green-100 w-60 h-80  p-3  m-3 rounded-xl'>
                <div >
                  <img src={data.image} alt="car-image" className='rounded-lg h-40 shadow-lg' />
                </div>
                <div>
                  <p className='text-xl font-semibold pt-2'>{data.name}</p>
                  <div className='flex'>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarOutline />
                  </div> 
                  <div className='text-sm flex font-medium'>
                  <p className='pr-2'>{data.fuelType}</p>
                  <p className='pr-2'> {data.transmission} </p>
                  <p className='pr-2'> {data.seatingCapacity}seats</p>
                  </div>
                  <div className='flex justify-center mt-4'>
                    <button className='bg-black rounded-lg p-2 text-white'>Rent Now</button>
                  </div>
                </div>
                
              </div>
            ))
          }
      </div>
        <div className='flex justify-end '>
         <Link to={"/vehicle/category/EconomyCar"}> <button className='p-2 bg-green-400 rounded-lg mr-5 mb-8 mt-5 hover:bg-green-600 font-semibold '>See More<FaRegArrowAltCircleRight className='inline ml-1' /></button></Link>
        </div>
        </div>
        
        <div>
        <h1 className='text-3xl md:text-5xl font-bold text-center p-6'>Luxury Car's</h1>
        </div>

      <div className='border border-b-black'>
        <div className=' flex  justify-center mt-14'>
        {
            fourVehicleLuxury.map((data)=>(
              <div className='bg-green-100 w-60 h-80  p-3  m-3 rounded-xl'>
                <div >
                  <img src={data.image} alt="car-image" className='rounded-lg h-40 shadow-lg' />
                </div>
                <div>
                  <p className='text-xl font-semibold pt-2'>{data.name}</p>
                  <div className='flex'>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarOutline />
                  </div> 
                  <div className='text-sm flex font-medium'>
                  <p className='pr-2'>{data.fuelType}</p>
                  <p className='pr-2'> {data.transmission} </p>
                  <p className='pr-2'> {data.seatingCapacity}seats</p>
                  </div>
                  <div className='flex justify-center mt-4'>
                    <button className='bg-black rounded-lg p-2 text-white font-semibold'>Rent Now</button>
                  </div>
                  
                  

                </div>
                
              </div>
            ))

          }

        </div>
        <div className='flex justify-end'>
       <Link to={'/vehicle/category/LuxuryCar'}> <button className='p-2 bg-green-400 rounded-lg mr-5 mb-8 mt-5 hover:bg-green-600 font-semibold'>See More<FaRegArrowAltCircleRight className='inline ml-1' /></button></Link>
        </div>
      </div>
      </div>
   
    </div>
  ) 
}

export default Collections