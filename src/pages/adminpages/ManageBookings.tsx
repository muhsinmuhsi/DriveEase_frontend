import { useEffect, useState } from 'react'
import adminApi from '../../adminApi'


interface User {
  username: string;
}

interface Booking {
  _id: string;
  startDate: string;
  endDate: string;
  vehicleName: string;
  userId: User; // Adjust this based on the API response structure
}
const ManageBookings = () => {
  const [bookings,setbookings]=useState<Booking[]>([])
  useEffect(()=>{
    const fetchbookings=async()=>{
      try {
        const response=await adminApi.get('/bookings')
        setbookings(response.data.data)
      } catch (error) {
        console.log(error,'error to fetch bookings');
        
      }
    }
    fetchbookings()
  },[])
  return (
    <div>
      <h2 className='text-2xl font-bold text-center p-7'>All Bookings</h2>
      <table className='ml-52 text-center '>
      <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Vehicle Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Start_Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">End_Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookings?.map((data,index)=>{
                    const StartDate=new Date(data?.startDate).toLocaleDateString()
                    const EndDate=new Date(data?.endDate).toLocaleDateString()
                    return(
                      <tr key={data._id} className="hover:bg-gray-100" >
                      <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {data?.userId?.username}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{data?.vehicleName}</td>
                      <td className="border border-gray-300 px-4 py-2">{StartDate}</td>
                      <td className="border border-gray-300 px-4 py-2">{EndDate}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
      </table>
    </div>
  )
}

export default ManageBookings