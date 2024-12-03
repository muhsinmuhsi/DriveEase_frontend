import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoCarSport } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";
import { IoMdRadioButtonOn } from "react-icons/io";

const Datepickerdiv = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='bg-green-50 m-14 flex flex-col p-8'>
        <div className=''>
            <p className='font-semibold'>Which Type Of Vehicle?</p>
            <button className='bg-green-400 rounded p-2 font-semibold m-3 focus:bg-green-600'><IoCarSport className='inline ' /> Car </button>
            <button className='bg-green-400 rounded p-2 font-semibold focus:bg-green-600'><RiEBikeFill className='inline' />Bike</button>
        </div>
        <div className='flex flex-col flex-wrap '>
            <div >
                <p className='inline font-sans font-semibold pr-3 pb-3 '>Return to the same location</p>
                <label className="relative inline-flex items-center cursor-pointer  ">
                <input type="checkbox" className="sr-only peer" />
                 <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-400 peer-focus:ring-2 peer-focus:ring-green-500 transition-all"></div><span
                   className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transform transition-transform"
                   ></span>
                 </label>
           </div>
            </div>

            <div className='  justify-between md:flex '>
                <div className='bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-1/2 h-36 p-auto p-3 my-5'>
                    <div>
                        <p className='font-semibold'> <IoMdRadioButtonOn  className='inline text-blue-700 mr-2 ' />pick-up</p>
                    </div>
                    <div className='flex justify-between items-center m-3'>
                        <span className='  border-gray-200 border-r-2 p-3'>
                            <p className='p-2 font-semibold'>Location</p>
                            <select className='bg-green-100 text-gray-400 text-sm rounded' >
                             <option value="">select your location</option>
                             <option value="calicut">Calicut</option>
                             <option value="Cochin">Cochin</option>
                              <option value="Bangalore">Bangalore</option>
                             </select>
                        </span>
                        <span className=' border-gray-200 border-r-2 p-3'>
                            <p className='p-2 font-semibold'>Date</p>
                            <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)} className="bg-green-100 rounded "  />
                        </span>
                        <span className=' p-3'>
                            <p className='p-2 font-semibold'>Time</p>
                            <input aria-label="Time" type="time" className='bg-green-100 mb-3 h-5 rounded-lg' placeholder='select your time'/>
                        </span>
                    </div>
                </div>

                <div className='bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-1/2 h-36 p-auto p-3 my-5'>
                    <div>
                        <p className='font-semibold'> <IoMdRadioButtonOn  className='inline text-blue-700 mr-2 ' />Drop - Off</p>
                    </div>
                    <div className='flex justify-between items-center m-3'>
                        <span className='  border-gray-200 border-r-2 p-3'>
                            <p className='p-2 font-semibold'>Location</p>
                            <select className='bg-green-100 text-gray-400 text-sm rounded' >
                             <option value="">select your location</option>
                             <option value="calicut">Calicut</option>
                             <option value="Cochin">Cochin</option>
                              <option value="Bangalore">Bangalore</option>
                             </select>

                        </span>
                        <span className=' border-gray-200 border-r-2 p-3'>
                            <p className='p-2 font-semibold'>Date</p>
                            <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)} className="bg-green-100 rounded"  />
                        </span>
                        <span className=' p-3'>
                            <p className='p-2 font-semibold'>Time</p>
                            <input aria-label="Time" type="time" className='bg-green-100 mb-3 h-5 rounded-lg' placeholder='select your time'/>
                        </span>
                    </div>
                </div>
            </div>

         <div className='flex justify-end'>
            <button className='bg-green-400 rounded font-semibold focus:outline-none focus:shadow-outline shadow-md p-2 hover:bg-green-500'>Let's Drive</button>
        </div>
        </div>


  )
}

export default Datepickerdiv