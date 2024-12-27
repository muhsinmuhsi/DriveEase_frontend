import  { useEffect, useState } from 'react'
import adminApi from '../../adminApi'

interface Vehicle {
  name: string;
}

interface User {
  username: string;
}

interface Booking {
  vehicleName: string;
}

const Dashbord = () => {
  const [vehicle,setvehicle]=useState<Vehicle[]>([])
  const [users,setusers]=useState<User[]>([])
  const [bookings,setbookings]=useState<Booking[]>([])
  useEffect(()=>{
    const fetchvehicles=async()=>{
      try {
      const response=await adminApi.get('/allVehicles')
      setvehicle(response.data.data)

      const users=await adminApi.get('/users')
      setusers(users.data.data)

      const bookings=await adminApi.get('/bookings')
      setbookings(bookings.data.data)
    } catch (error) {
      console.log(error,'error to fetch vehicles');      
    }
    }
    fetchvehicles()
    
  },[])
  return (
    <div className=' '>
      
      <div className='flex pt-3 flex-wrap justify-around'>
        <div className='w-80 h-40 bg-gray-100 mr-5 rounded-lg shadow p-3 flex flex-col justify-around '>
          <h2 className='text-xl font-bold py-3'>Total Vehicles {vehicle.length}</h2>
          <p className='text-lg font-semibold'>latest: {vehicle[vehicle.length-1]?.name ||"NA"}</p>
        </div>

        <div className='w-80 h-40 bg-gray-100 rounded-lg shadow mr-5 flex flex-col justify-around p-3'>
          <h2 className='text-xl font-bold py-3'>All users {users?.length}</h2>
          <p className='text-lg font-semibold'>latest:{users[users.length-1]?.username||"NA"}</p>

        </div>

        <div className='w-80 h-40 bg-gray-100 rounded-lg shadow mr-5 flex flex-col justify-around p-3 mt-5'>
          <h2 className='text-xl font-bold py-3'>All Bookings {bookings.length}</h2>
          <p className='text-lg font-semibold'>latest:{bookings[bookings.length-1]?.vehicleName||"NA"}</p>

        </div>
      </div>
      
    </div>
  )
}

export default Dashbord