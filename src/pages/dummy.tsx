import React from 'react'
import logo from '../../assets/logo-transparent-png.png'
import profile from '../../assets/account-6491185_640.png'

const Header = () => {
  return (
    
    <div className='flex justify-around'>
      <div><img src={logo} alt=""className='w-40 h-10 m-4 ' /></div>
      <div className='flex '>
        <button href="" className=' hover:bg-green-400  hover:shadow-md rounded font-sans text-lg font-bold p-2 mt-2 focus:border-b-2 focus:border-black focus:bg-green-400 '>Home</button>
        <button href="" className=' hover:bg-green-400  hover:shadow-md rounded font-sans text-lg font-bold p-2 mt-2 focus:border-b-2 focus:border-black focus:bg-green-400'>Collections</button>
        <button href="" className=' hover:bg-green-400  hover:shadow-md rounded font-sans text-lg font-bold p-2 mt-2 focus:border-b-2 focus:border-black focus:bg-green-400'>Pricing</button>
        <button href="" className=' hover:bg-green-400  hover:shadow-md rounded font-sans text-lg font-bold p-2 mt-2 focus:border-b-2 focus:border-black focus:bg-green-400'>FAQs</button>
        <button href="" className=' hover:bg-green-400  hover:shadow-md rounded font-sans text-lg font-bold p-2 mt-2 focus:border-b-2 focus:border-black focus:bg-green-400'>Reviews</button>
      </div>
      <div className='mt-5 '><img src={profile} alt="" className='object w-10 h-10'/></div>
    </div>
  )
}

