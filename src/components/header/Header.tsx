import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo-transparent-png.png'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ResponsiveNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loggin,setloggin]=useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    const user=localStorage.getItem('user')
    if(user){
      setloggin(true)
    }else{
      setloggin(false)
    }
  })

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logouted!',
          text: 'Your file has been Logouted.',
          icon: 'success'
        });
        localStorage.clear();
        setloggin(false);
        setIsNavOpen(false);
      }
    });
  };
  

  return (
    <div className="fixed bg-white w-full h-20 z-50 ">
      {/* Navbar */}
      <nav className="w-full   justify-between items-center flex flex-col md:flex-row">
        <div className="text-2xl font-bold"><img src={logo} alt=""className='w-40 h-10 m-4 ' /></div>
      
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-green-400 cursor-pointer focus:bg-green-400 font-semibold" onClick={()=>navigate('/')}>Home</li>
          <li className="hover:text-green-400 cursor-pointer font-semibold" onClick={()=>navigate('/collections')}>Collections</li>
          <li className="hover:text-green-400 cursor-pointer font-semibold" onClick={()=>navigate('/Pricing')}>Pricing</li>
          <li className="hover:text-green-400 cursor-pointer font-semibold" onClick={()=>navigate('/FAQs')}>FAQs</li>
        </ul>
        <button
          onClick={() => setIsNavOpen(true)}
          className="text-white bg-green-600 px-4 py-2 rounded-md mr-5"
        >
         <IoMenu />
        </button>
      </nav>

      {/* Modal-like Sidebar */}
      {isNavOpen && (
        <div className="fixed inset-0  bg-opacity-90 z-50">
          <div className="w-1/5 bg-white shadow-xl p-6 flex flex-col float-right rounded-sm ">
            <button
              onClick={() => setIsNavOpen(false)}
              className="self-end text-gray-900 text-xl mb-4"
            >
              ✕
            </button>
            {
              loggin ? <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-900">
              <li className="hover:text-green-600 cursor-pointer" onClick={()=>handleLogout()}>Logout</li>
              <li className="hover:text-green-600 cursor-pointer" onClick={()=>navigate('/mybookings')}>MyBookings</li>
            </ul>:<ul className="flex flex-col gap-4 text-lg font-semibold text-gray-900">
              <li className="hover:text-green-600 cursor-pointer focus:text-green-600" onClick={()=>navigate('/register')}>Sign Up </li>
              <li className="hover:text-green-600 cursor-pointer focus:bg-green-400" onClick={()=>navigate('/Login')}>Sign In</li>
              <li className="hover:text-green-600 cursor-pointer" onClick={()=>navigate('/mybookings')}>MyBookings</li>
            </ul>

            }
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
