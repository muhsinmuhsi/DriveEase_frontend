import axios from 'axios'
import  { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addSelectedVehicle} from '../../redux/vehicleSlice';
import Header from '../header/Header'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDaysDifference } from '../../redux/DateSlice';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Finalvehicle = () => {
    const vehicle=useAppSelector((state)=>state.vehicle.selectedVehicle)
    const pickupdate=useAppSelector((state)=>state.dateslice.pickupDate)
    const dropoffdate=useAppSelector((state)=>state.dateslice.dropoffDate)
    const pickupLocation=useAppSelector((state)=>state.dateslice.pickupLocation)
    const dropoffLocation=useAppSelector((state)=>state.dateslice.dropoffLocation)
    const days=useAppSelector(state=>state.dateslice.daysdifference)
    const dispatch=useAppDispatch()
    const params=useParams()
    const navigate=useNavigate()
     useEffect(()=>{
        const fetchvehicle=async()=>{
            try {
                const response=await axios.get(`http://localhost:8080/api/users/vehicle/${params.id}`,{withCredentials:true})
                dispatch(addSelectedVehicle(response.data.data))

            } catch (error) {
                console.log(error,'error');
            }

        }
        if(params){
            fetchvehicle()
        }
        if(pickupdate&&dropoffdate){
            calculateDays()
        }
     })

     const calculateDays=()=>{
        if (pickupdate && dropoffdate) {
            const pickup = new Date(pickupdate);
            const dropoff = new Date(dropoffdate);
        
            if (pickup <= dropoff) {
              const timedifference = dropoff.getTime() - pickup.getTime(); // Corrected to dropoff - pickup
              const days = Math.ceil(timedifference / (1000 * 60 * 60 * 24)); // Rounded up to nearest full day
              dispatch(setDaysDifference(days));
            } else {
              toast.error("Pickup date must be less than or equal to dropoff date");
            }
          } else {
            toast.error("Both pickup and dropoff dates are required");
          }
        
     }




  return (
    <div>
        <Header/>
        <Toaster position="bottom-right"/>
        <div className='flex flex-col md:flex-row justify-between pt-20'>
        <div className='w-1/2 '>
            <img src={vehicle?.image} alt="" />
            <p className='font-bold'>Brand:{vehicle?.brand}</p>
            <div className='bg-gray-200 w-full h-56 overflow-auto border border-black'>
                <p className='text-xl font-semibold text-center'> read reviews hear </p>
                {
                    vehicle?.Reviews?.length===0?<p className='text-lg font-bold text-center'>no reviews yet </p>:(
                         vehicle?.Reviews?.map((reviews)=>(
                        <div className='bg-white border border-black w-full h-auto '>
                            <p className='text-lg font-normal p-5 '>{reviews.review}</p>
                        </div>
                        
                    ))
                    )
                }
            </div>
        </div>
        <div className='w-1/2 flex flex-col '>
            <p className='text-center text-3xl font-bold'>{vehicle?.name}</p>
            <p className='font-semibold'>{vehicle?.type}</p>
            <div  className='flex text-sm font-semibold pt-2'>
                <p className='pr-3'>{vehicle?.transmission}</p>
                <p className='pr-3'>{vehicle?.fuelType}</p>
                <p className='pr-3'>{vehicle?.seatingCapacity}Seat</p>
              </div>
              <div className='flex flex-col p-2 border rounded-xl shadow-inner  mt-6 '>
                <div className='flex bg-green-50 rounded p-2 shadow-sm justify-around text-xl font-semibold'>
                    <div>
                        <p>{pickupLocation}</p>
                        <p>{pickupdate ? new Date(pickupdate).toLocaleDateString() : 'No date selected'}</p>

                    </div>
                    <div className='flex items-center p-2'>
                        <p><IoIosArrowDroprightCircle className='text-xl'/></p>
                    </div>
                    <div >
                        <p>{dropoffLocation}</p>
                        <p>{dropoffdate ? new Date(dropoffdate).toLocaleDateString() : 'No date selected'}</p>
                    </div>
                </div>
                <div className='flex justify-between p-3 font-bold'>
                    <div>
                      <p>Total ₹{vehicle?.pricePerDay && days && vehicle.pricePerDay * days} </p>
                      <p>Days: {days}</p>
                    </div>
                    <div>
                        <p>₹{vehicle?.pricePerDay && (vehicle.pricePerDay / 24).toFixed(2)}/hour</p>
                        <p>₹{vehicle?.pricePerDay&& vehicle.pricePerDay}/day</p>
                    </div>
                </div>
              
              </div>

              <div className='flex justify-end mt-10 mr-5'>
                <button className='text-lg font-bold bg-green-500 hover:bg-green-700 rounded-lg p-2 ' onClick={()=>navigate('/document/upload')}>Rent now </button>
              </div>
              
        </div>
    </div>
    </div>
    
  )
}

export default Finalvehicle