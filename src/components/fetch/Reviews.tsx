import  { useEffect, useState } from 'react'
import { HiPencilSquare } from 'react-icons/hi2';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import api from '../../api';


interface Review {
  content: string;
  updatedAt?: string; // optional because it might not always exist
  userId?: {
    username: string;
  };
}
export interface vehicleSchema {
  _id: string;
  name: string;
  transmission: string;
  fuelType: string;
  seatingCapacity: number;
  pricePerDay: number;
  image: string;
  Reviews?: Review[]; // Add the Reviews property as an array of Review
}

export interface userschema {
    id:string;
    username:string;
    email:string;
    password:string;
    profileImg:string;
    role:string;
    isverified:boolean;
    otp:string|undefined;
    otpExpires:number|undefined;
    resetpassword:string;
    restpasswordOtpExpires:Date;
    created_at:Date;
    Bookings:[];
    Reviews:Review[];

}


export interface bookings {
    _id:string,
    userId:string,
    carId:string,
    vehicleName:string,
    startDate:Date,
    endDate:Date,
    amount:number,
    status:boolean,
    paymentId:string,
    orderId:string
}

interface ReviewsProps {
  isopen: boolean;
  onclose: () => void;
  vehicleId: string;
}

const Reviews:React.FC<ReviewsProps> = ({isopen,onclose,vehicleId}) => {
    const [vehicle,setvehicle]=useState<vehicleSchema|null>(null)
    const [Reviews,setReveiws]=useState('')
    const [add,setadd]=useState(false)

    const userLocal=localStorage.getItem('user')
    const user=JSON.parse(userLocal as string)
    
    useEffect(()=>{
        const fetchReviews=async()=>{
            try {
                const response=await api.get(`/vehicle/${vehicleId}`)
                setvehicle(response.data.data)                
            } catch (error) {
                console.log(error,'error to fetch comment ');
                
            }
        }
        fetchReviews()
    },[vehicleId,add])

    const postReviews=async()=>{
        try {
            await api.post(`/Reviews/add/${vehicleId}`,{
                userId:user._id,
                content:Reviews
            })
            setadd(true)
        } catch (error) {
            console.log(error,'error to post reviews');
            
        }

    }

    const posthandle=()=>{
        postReviews()
        setReveiws('')
    }
        
    
  return (
    
    isopen?(
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onclose}></div>
<div className="fixed w-7/12 h-[400px] z-50 bg-white shadow-lg inset-x-0 top-1/4 left-64 rounded p-3">
  <div className="flex justify-end pb-5">
    <button className="" onClick={onclose}>
      <IoCloseSharp />
    </button>
  </div>
  <div>
    <div className="flex">
      <input
        type="text"
        placeholder="Add your Reviews"
        onChange={(e)=>setReveiws(e.target.value)}
        value={Reviews}
        className="w-full h-10 rounded focus:outline-none bg-gray-100 p-2"
      />
      <button className="bg-green-500 hover:bg-green-700 text-white rounded-xl px-3 text-xl ml-2" onClick={()=>posthandle()}>
        <IoSend className="inline" />
      </button>
    </div>
    <div className="w-full flex flex-col gap-3 h-[250px] mt-5 overflow-auto scrollbar-none">
      {vehicle?.Reviews?.length === 0 ? (
        <div>
          <p className="text-xl text-center font-mono">No comments yet</p>
        </div>
      ) : (
        vehicle?.Reviews?.map((data, index) => {
            const posteddate = data.updatedAt ? new Date(data.updatedAt) : null;
  const formattedDate = posteddate && !isNaN(posteddate.getTime())
    ? posteddate.toISOString().split('T')[0]
    : "Unknown date";
            return(
                <div key={index} className="p-2 bg-gray-200 rounded">
            <p>{data.content}</p>
            <div className="flex flex-col items-end">
              <p>
                <HiPencilSquare className="inline" />
                {data.userId?.username}
              </p>
              <p className='text-xs '>Posted Date: {formattedDate}</p>
            </div>
          </div>
            )
       })
      )}
    </div>
  </div>
</div>

        </>
    ):null
    
  )
}

export default Reviews