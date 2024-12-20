import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from "react-icons/io"; 
import EditVehicle from '../../components/Adim/EditVehicle';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addEconomyvehicle } from '../../redux/vehicleSlice';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageVehicles = () => {
    const [isshowmodal,setshowmodal]=useState(false)
    const [vehicleId,setvehicleId]=useState()
    const dipacth=useAppDispatch()
    const vehicle=useAppSelector((state)=>state.vehicle.EconomyCar)


    const onclose=()=>{
        setshowmodal(false)
    }

    const edithandle=(id)=>{
        setshowmodal(true)
        setvehicleId(id)
    }

    useEffect(()=>{
        const fetchcollectoions=async()=>{
            try {
                const response=await axios.get('http://localhost:8080/api/admin/allVehicles',{withCredentials:true})
                dipacth(addEconomyvehicle(response.data.data))

            } catch (error) {
                console.log(error,'error to fetch collections');
                
            }
        }
        fetchcollectoions()
    },[isshowmodal])

    const deletehandle=async(vehicleId)=>{
      Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Logouted!',
                text: 'Your file has been Logouted.',
                icon: 'success'
              });
      try {
        const response= await axios.delete(`http://localhost:8080/api/admin/vehicle/delete/${vehicleId}`,{withCredentials:true})
        toast.success(`${response.data.message}|| vehicle deleted success fully`)
        setshowmodal(false)
      } catch (error) {
        console.log(error,'error to delete product');
        toast.error('something went wrong')
      }

            }
          });

      
    }
  return (
    <div>
      <Toaster/>
        <h1 className='text-3xl text-center font-bold mt-7 mb-8'>All Collections</h1>
        <div className='flex flex-wrap'>
            {
                vehicle.map((data:any)=>{
                    return(
                         <div className='bg-gray-300 w-60 h-80  p-3  m-3 rounded-xl'>
                                        <div >
                                          <img src={data.image} alt="car-image" className='rounded-lg h-40 shadow-lg object-fill' />
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
                                          
                                          <div className='flex justify-around mt-4'>
                                            <button className='bg-green-600 hover:bg-green-800 rounded px-3 text-white font-semibold' onClick={()=>edithandle(data._id)}>Edit</button>
                                            <button className='bg-green-600 hover:bg-green-800 rounded p-2 text-white font-semibold' onClick={()=>deletehandle(data._id)}>Delete</button>
                                          </div>
                                          
                                          
                        
                                        </div>
                                        
                                      </div>
                    )
                })
            }
            


        </div>
        <EditVehicle
        isOpen={isshowmodal}
        onclose={onclose}
        vehicleId={vehicleId}

        />
    </div>
  )
}

export default ManageVehicles