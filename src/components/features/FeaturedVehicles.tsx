import React from 'react'
import bmw from '../../assets/BMW.png'
import audi from '../../assets/Audi.png'
import rangerover from '../../assets/ranger over.png'
import benz from '../../assets/Benze.png'
import { FaStar } from "react-icons/fa";

const FeaturedVehicles = () => {
  return (
    <div className='p-3 pt-10 pb-14 '>
        <div>
            <p className='font-extrabold text-3xl ml-10 '>Featured Vehicles</p>
        </div>
        <div className=' justify-around pt-8  flex md:flex-row flex-wrap flex-col  items-center'>
            <div className='bg-slate-100 flex flex-col w-52 h-80 mx-5   shadow-xl rounded-2xl p-4'>
                <img src={bmw} alt="" className='w-44 h-32 rounded-xl' />
                <p className='font-semibold py-3'>BMW</p>
                <p className='font-extrabold py-3'>X 7</p>
                <div className='flex '>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>

            <div className='bg-slate-100 flex flex-col w-52 h-80 mx-5   shadow-xl rounded-2xl p-4'>
                <img src={benz} alt="" className='w-44 h-32 rounded-xl' />
                <p className='font-semibold py-3'>Benz</p>
                <p className='font-extrabold py-3'>GLA</p>
                <div className='flex '>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>

            <div className='bg-slate-100 flex flex-col w-52 h-80 mx-5   shadow-xl rounded-2xl p-4'>
                <img src={audi} alt="" className='w-44 h-32 rounded-xl' />
                <p className='font-semibold py-3'>Audi</p>
                <p className='font-extrabold py-3'>A 6 </p>
                <div className='flex '>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>

            <div className='bg-slate-100 flex flex-col w-52 h-80 mx-5   shadow-xl rounded-2xl p-4'>
                <img src={rangerover} alt="" className='w-44 h-32 rounded-xl' />
                <p className='font-semibold py-3'>Ranger Over</p>
                <p className='font-extrabold py-3'>Evoque</p>
                <div className='flex '>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedVehicles