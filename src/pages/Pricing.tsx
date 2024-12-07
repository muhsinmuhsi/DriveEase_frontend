import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/features/Footer';
import { FaCommentDollar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import backgroundimage from '../assets/pricing background.png';

const Pricing = () => {
 
  const priceDetails=[
    {
      title:'Base Rental Cost',
      Description:'The fundamental cost of renting the car for a specific period.',
      prices:[
        '₹1,500 per day for an economy car.',
        '₹4,000 per day for a luxury sedan.'
      ]
    },
    {
      title:'Mileage Charges',
      Description:'The fundamental cost of renting the car for a specific period.',
      prices:[
          '₹1,500 per day for an economy car.',
          '₹4,000 per day for a luxury sedan.'
      ]
    },
    {
      title:'Insurance Charges',
      Description:'Coverage cost for accidental damage or theft protection.',
      prices:[
          'Basic Insurance: ₹300/day',
          'Comprehensive Insurance: ₹500/day.'
      ]
    },
    {
      title:'Fuel Policy',
      Description:'Costs associated with fuel usage, depending on the policy.',
      prices:[
          'Full-to-Full: Renter refuels the car before returning.',
          ' additional kilometer.'
      ]
    },
    {
      title:'Taxes and Fees',
      Description:'Applicable taxes or service charges',
      prices:[
          '18% GST on the total rental amount.',
          ' ₹200 convenience fee for online booking.'
      ]
    },
    {
      title:'Pickup and Drop-off Fees',
      Description:'Charges for delivering or collecting the car from a specific location.',
      prices:[
          '₹300 for airport delivery',
          'Free pickup within city limits.'
      ]
    },
    {
      title:'Additional Driver Fee',
      Description:'Charges for adding extra drivers to the rental agreement.',
      prices:[
          '₹500 per additional driver.'
      ]
    },
    {
      title:'Late Return Fee',
      Description:'Penalty for returning the vehicle beyond the agreed rental period.',
      prices:[
          '₹200/hour for late returns.'
      ]
    },
    {
      title:'Accessories Charges',
      Description:' Optional charges for additional items or services.',
      prices:[
          'GPS Navigation: ₹200/day.',
          'Child Seat: ₹150/day.'
      ]
    },
    {
      title:'Seasonal Pricing',
      Description:'Adjusted pricing during peak or off-peak seasons.',
      prices:[
          'Peak Season (Festivals): ₹2,000/day.',
          'Off-Season (Monsoon): ₹1,200/day.'
      ]
    },
    {
      title:'Refundable Security Deposit',
      Description:'Upfront deposit returned after the rental period, barring any damages.',
      prices:[
          '₹5,000 security deposit.',
      ]
    },
    {
      title:'Special Discounts',
      Description:'Promotional or loyalty-based discounts applied to the final price',
      prices:[
          '10% off for first-time users.',
          '₹1,000 cashback for bookings over ₹10,000.'
      ]
    }

  ]

  return (
    <div className="">
      <Header />
      <div
        className=" h-auto bg-gradient-to-r from-black to-green-700 pt-20 pb-6 "
        // style={{
        //   backgroundImage: `url(${backgroundimage})`,
        //   backgroundAttachment: 'fixed',
        //   backgroundPosition: 'center',
        //   opacity: 0.5,
        //   zIndex: -1 
        // }} 
      >
        <div className=' flex flex-col items-center'>
          <h1 className=' text-6xl text-white font-bold pb-8 pt-3 shadow-lg'>Transparent Pricing</h1>
          <div className='w-1/2'>
                      <p className=' text-white text-wrap text-xl  bg-green-50 bg-opacity-30 p-3 rounded'>No hidden charges! Our pricing includes clear details on base rates, insurance, mileage limits, and taxes, so you know exactly what you’re paying for.</p>
          </div>
          

        </div>
        <div className='flex justify-around p-3 pt-64 flex-wrap '>
          {
            priceDetails.map((item)=>(
              <div className='bg-green-50 bg-opacity-30 w-72 h-auto p-3 rounded-xl text-wrap shadow-lg shadow-gray-900 mb-4'>
                <h1 className='text-white text-2xl font-bold p-3 '>{item.title}</h1>
                <p className='text-lg font-semibold p-3 '>{item.Description}</p>
                <ul className='list-disc ml-3'>
                  {
                    item.prices.map(price=>(
                      <li className=''>{price}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
