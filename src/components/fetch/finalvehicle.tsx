import  { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addSelectedVehicle} from '../../redux/vehicleSlice';
import Header from '../header/Header'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDaysDifference } from '../../redux/DateSlice';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Footer from '../features/Footer';
import { HiPencilSquare } from "react-icons/hi2";
import api from '../../api';



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
                const response=await api.get(`/vehicle/${params.id}`,)
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

        <div className=' pb-20 border '>

        <div className='flex flex-col md:flex-row justify-around pt-20 mx-16'>
        <div className=' '>
            <img src={vehicle?.image} alt="" className='w-72 h-44 object-contain ' />
            
        </div>

                <div className='flex flex-col bg-gray-100 shadow-md rounded p-4 m-3  justify-around  w-5/12'>
                <div className='flex justify-between mb-8'>
                    <div>
                        <p className=' text-xl font-bold'>{vehicle?.name}</p>
                        <p className='inline pr-4'>{vehicle?.fuelType}</p>
                        <p className='inline'>{vehicle?.type}</p>
                        
                    </div>
                    <div className='text-lg '>
                     <p><b>Duration : </b>{days} Day</p>   
                    <p>₹{vehicle?.pricePerDay&& vehicle.pricePerDay}/day</p>
                    </div>
            
                </div>    
                <div className='flex justify-around'>
                    <div>
                        <p className='font-bold'>{pickupLocation}</p>
                        <p>{pickupdate ? new Date(pickupdate).toLocaleDateString() : 'No date selected'}</p>

                    </div>
                    <div className='flex items-center p-2'>
                        <p><IoIosArrowDroprightCircle className='text-xl'/></p>
                    </div>
                    <div >
                        <p className='font-bold'>{dropoffLocation}</p>
                        <p>{dropoffdate ? new Date(dropoffdate).toLocaleDateString() : 'No date selected'}</p>
                    </div>
                </div>

                </div>
                <div className='p-3 flex w-40 h-36   justify-center items-center'>
                    <p className='text-xl font-bold'>Total :₹{vehicle?.pricePerDay && days && vehicle.pricePerDay * days}</p>
                </div>

        </div>
        <div className='flex justify-end mt-10 m-11'>
                <button className='text-lg font-bold bg-green-500 hover:bg-green-700 rounded-lg p-2 ' onClick={()=>navigate('/document/upload')}>Rent now </button>
       </div>



    </div>
<p className='text-2xl font-bold text-center pt-6'> Read Reviews Hear </p>
   <div className='flex justify-center'>
         <div className='w-7/12 h-56 overflow-auto scrollbar-none   border border-green-400 shadow-md rounded-lg  m-6'>
                
                {
                    vehicle?.Reviews?.length===0?<p className='text-lg font-bold text-center'>no reviews yet </p>:(
                         vehicle?.Reviews?.map((reviews)=>(
                        <div className='bg-white border   h-auto px-6 '>
                            <p className='text-lg font-normal p-5 text-wrap'>{reviews.content}</p>
                            <div className='flex justify-end'>
                                <p><HiPencilSquare className='inline'/>{reviews.userId?.username}</p>
                            </div>
                        </div>
                        
                    ))
                    )
                }
            </div> 
  </div>


    <Footer/>
    </div>
    
  )
}

export default Finalvehicle

