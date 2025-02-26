import  { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/features/Footer'
import api from '../api'
import { userschema } from '../../../../server/src/models/User';
import { bookings } from '../../../../server/src/models/Bookings';
const Mybookings = () => {
    const [bookings,setbookings]=useState([])
    const [currentUser,setCurrentUser]= useState<userschema|undefined>()
    const createdDate = currentUser?.created_at 
  ? new Date(currentUser.created_at).toLocaleDateString()
  : "N/A";
    const fullAmount=bookings.reduce((acc,data:bookings)=>acc+=data.amount,0)


    useEffect(()=>{
        const fetchbookings=async()=>{
            const user=localStorage.getItem('user')
            const userparse=JSON.parse(user as string)
            setCurrentUser(userparse)
            
            try {
                const response=await api.get(`/mybookings/${userparse?._id}`)
                setbookings(response.data.user.Bookings)
            } catch (error) {
                console.log(error,'error');
                
            }
        }
        fetchbookings()

    },[bookings])
    
    
    return (
        <div className=''>
            <Header/>
  
  
{
  currentUser?(
 <div className="grid grid-cols-5 grid-rows-5 gap-4 pt-3">
    <div className="row-span-5 mr-6">
    <div className='  h-80 w-full flex flex-col items-center gap-3 '>
        <img className=' rounded-full  w-24 h-24' src={currentUser?.profileImg} alt="" />
        <div>
        {currentUser ? <p className='font-bold '>{currentUser.username}</p> : <p>Loading...</p>}
        </div>
        <p className='text-sm'>Created At : {createdDate}</p>
        <p className='font-semibold'>Echoes of Your Experience :{currentUser?.Reviews.length}</p>
      </div>
    </div>

    <div className="col-span-2 row-span-2">
        <div className='shadow-md w-80 h-64 flex flex-col items-center justify-center gap-3 rounded-md'>
        <p className='text-xl font-semibold '>
          total bookings
        </p>
        <div className='bg-green-300 rounded-full w-32 h-32 flex flex-col items-center justify-center'>
        <p className='font-semibold text-2xl'>
          {currentUser?.Bookings.length}
        </p>
        </div>
      </div>

    </div>
    <div className="col-span-2 row-span-2 col-start-4">
    <div className='shadow-md w-80 h-64 flex flex-col items-center justify-center gap-3 rounded-md'>
        <p className='text-xl font-semibold '>
       Total spend amount
        </p>
        <div className='bg-green-300 rounded-full w-32 h-32 flex flex-col items-center justify-center'>
        <p className='font-semibold text-2xl'>
          {fullAmount}
        </p>
        </div>
      </div>
    </div>
    <div className="col-span-4 row-span-3 col-start-2 row-start-3 mt-6">
    <p className="text-3xl font-bold mb-8">Bookings</p>
       <table className="table-auto border-collapse border border-gray-300 w-3/4 shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Vehicle Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Pickup Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Dropoff Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Paid Amount</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Booked Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((data:any,index) => {
                  const pickupDate = new Date(data.startDate).toLocaleDateString();
                  const dropoffDate = new Date(data.endDate).toLocaleDateString();
                  const bookedDate = new Date(data.createdAt).toLocaleDateString();
      
                  return (
                    <tr key={data._id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {data.vehicleName || "NA"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{pickupDate}</td>
                      <td className="border border-gray-300 px-4 py-2">{dropoffDate}</td>
                      <td className="border border-gray-300 px-4 py-2">₹ {data.amount}</td>
                      <td className="border border-gray-300 px-4 py-2">{bookedDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>



    </div>
</div>
    
  ):(
    <p className='font-semibold text-2xl text-center'>pleas login first &#128522;</p>

  )
  
}
 

          <Footer/>
        </div>
      );
      
}

export default Mybookings