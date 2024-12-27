import  { useEffect, useState } from "react";
import adminApi from "../../adminApi";

interface UserModalProps {
  isopen: boolean; // Corrected casing
  onclose: () => void;
  userId: string;
}

interface Booking {
  startDate: string;
  endDate: string;
  vehiclename: string;
  amount: number;
}

interface User {
  username: string;
  email: string;
  Bookings?: Booking[]; // Optional bookings array
}

export default function UserModal({isopen,onclose,userId}:UserModalProps) {
    const [user,setuser]=useState<User|null>(null)

  useEffect(()=>{
    const fetchuserbyid=async()=>{
    try {
        const response=await adminApi.get(`/user/${userId}`);
        setuser(response.data.data)        
    } catch (error) {
        console.log(error,"error to fetching user");
    }
  }
  fetchuserbyid()
  },[userId])
  
  return (
    <>
      
      {isopen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-96 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-white rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 text-black  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    User Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onclose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 h-96 overflow-auto scrollbar-none">
                    <div className="bg-gray-100 rounded shadow-md p-3">
                      <p className="text-lg font-bold pb-3">{user?.username}</p>
                      <p>email:{user?.email}</p>
                    </div>

                    <div>
                        <h4 className="text-center text-xl font-semibold pt-3">Bookings</h4>
                        <div className="flex flex-col ">
                        {
                           user?.Bookings?.map((booking,)=>{
                            const pickupdate=new Date(booking.startDate).toLocaleDateString()
                            const dropoffdate=new Date(booking.endDate).toLocaleDateString()

                            return(
                            <div className="bg-gray-100 rounded w-full shadow-md mt-4">
                            <p className="text-xl font-bold p-2">{booking.vehiclename}</p>
                            <p className="text-lg font-semibold p-2">pickup Date:{pickupdate}</p>
                            <p className="text-lg font-semibold p-2">dropoff Date:{dropoffdate}</p>
                            <p className="text-lg font-semibold p-2">amount:{booking.amount}</p>
                           </div> 
                            )

                           }) 
                        }
                
                        </div>
                        
                        
                    </div>

                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onclose}
                  >
                    Close
                  </button>

                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}    