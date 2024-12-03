import React from 'react'

const Emailsubscribtion = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col '>
        <p className='font-medium text-lg pl-2'>Would you like to receive</p>
        <p className='font-bold text-2xl pl-2'>Special offers by email?</p>
        <div className='mt-4'>
          <input type="email" className='rounded-full border border-black w-80  h-11' /> 
          <button className='bg-green-300 hover:bg-green-600 rounded-full p-2 text-sm  relative right-20'>Subscribe</button> 
        </div>
    </div> 
    </div>
   
  )
}

export default Emailsubscribtion