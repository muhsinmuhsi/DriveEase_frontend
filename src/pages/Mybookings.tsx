import  { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/features/Footer'
import api from '../api'
const Mybookings = () => {
    const [bookings,setbookings]=useState([])

    useEffect(()=>{
        const fetchbookings=async()=>{
            const user=localStorage.getItem('user')
            const userparse=JSON.parse(user as string)
            try {
                const response=await api.get(`/mybookings/${userparse._id}`)
                setbookings(response.data.user.Bookings)
            } catch (error) {
                console.log(error,'error');
                
            }
        }
        fetchbookings()

    },[])
    return (
        <div className=''>
            <Header/>
          <p className="text-5xl font-bold text-center mb-8">My bookings</p>
          <div className="flex justify-center mb-60">
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
          <Footer/>
        </div>
      );
      
}

export default Mybookings