import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/features/Footer'
import { FaCommentDollar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div>
        <Header/>
        <div className='bg-green-100 w-full h-full pt-24'>
            <div className='w-full h-80 '>
            <FaCommentDollar className='text-9xl opacity-10 absolute left-32'/>
            <FaDollarSign />
            <FaSackDollar />



            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Pricing