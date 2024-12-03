import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='flex bg-black   text-white justify-around mt-20 border border-white border-b-2'>
        <div className=' w-60 p-3'>
            <a href="" className='font-semibold block p-3 '>Home</a>
            <a href="" className='font-semibold block p-3 '>About us</a>
            <a href="" className='font-semibold block p-3 '>Affiliate</a>
        </div>
        <div className=' w-60 p-3'>
            <a href="" className='font-semibold block p-3 '>Contact us </a>
            <a href="" className='font-semibold block p-3 '>My account</a>
            <a href="" className='font-semibold block p-3 '>Logout </a>
        </div>
        <div className=' w-60 p-3' >
            <a href="" className='font-bold block p-3 '>DriveEase</a>
            <a href="" className='font-semibold block p-3 '>DriveEase@gmail.com</a>
            <a href="" className='font-semibold block p-3   '>Phone : +91 7029345783</a>
        </div>
    </div>
    <div className='w-full p-4 flex justify-around'>
       <div>
        <p>Copyright 2024 DriveEase All rights reserved.</p>
       </div>
       <div>
        <p>Follow in social media :</p>
        <div className='flex  justify-around'>
            <FaInstagram />
            <FaFacebookSquare />
            <FaXTwitter />
        </div>
        
       </div>
       <div className='flex justify-around'>
        <a href="" className='text-xs p-2'>Privacy Policy</a>
        <a href="" className='text-xs p-2'>Terms & Conditions</a>
        <a href="" className='text-xs p-2'>Refund Policy</a>
        <a href="" className='text-xs p-2'>Cancellation Policy</a>

       </div>
    </div>
 </div>
    
  )
}

export default Footer