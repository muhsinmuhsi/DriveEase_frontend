import { GiHomeGarage } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { GiMultipleTargets } from "react-icons/gi";
import { FaRoadCircleCheck } from "react-icons/fa6";
import { AiFillInsurance } from "react-icons/ai";


const Facilities = () => {
  return (
    <div className='flex justify-around flex-wrap p-10 border-b-2 border-gray-200'>    
       <div className='bg-green-200 shadow w-40 h-40  rounded-tl-2xl rounded-br-2xl flex flex-col items-center pt-4'>
        <div className='bg-white w-24 h-24 rounded-3xl flex justify-center items-center'>
        <GiHomeGarage className='text-5xl'/>
        </div>
        <p className='font-bold text-wrap'>Doorstep Delivery</p>
       </div>
       <div className='bg-green-200 shadow w-40 h-40   rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center'>
       <div className='bg-white w-24 h-24 rounded-3xl flex justify-center items-center'>
        <GrVmMaintenance className='text-5xl'/>
        </div>
        <p className='font-bold text-wrap'>Zero Maintenance</p>
       </div>
       <div className='bg-green-200 shadow w-40 h-40   rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center'>
       <div className='bg-white w-24 h-24 rounded-3xl flex justify-center items-center'>
        <GiMultipleTargets className='text-5xl'/>
        </div>
        <p className='font-bold text-wrap'>Multiple Pickup</p>
       </div>
       <div className='bg-green-200 shadow w-40 h-40   rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center'>
       <div className='bg-white w-24 h-24 rounded-3xl flex justify-center items-center'>
        <FaRoadCircleCheck className='text-5xl'/>
        </div>
        <p className='font-bold text-wrap'>Road side Assistance</p>
       </div>
       <div className='bg-green-200 shadow w-40 h-40   rounded-tl-2xl rounded-br-2xl flex flex-col justify-center items-center'>
       <div className='bg-white w-24 h-24 rounded-3xl flex justify-center items-center'>
        <AiFillInsurance className='text-5xl'/>
        </div>
        <p className='font-bold text-wrap'>Free Insurance</p>
       </div>
    </div>
  )
}

export default Facilities