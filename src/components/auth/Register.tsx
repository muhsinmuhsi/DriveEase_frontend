
import React from 'react'
import Googlelogin from './Googlelogin'
import logo from '../../assets/logo-transparent-png.png'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const signupvalidation=yup.object({
    username: yup.string().min(3).required("Please enter name"),
    email: yup.string().email("Please enter valid email").required("Please enter email"),
    password: yup.string().min(5).required("Please enter password"),
    cpassword: yup.string().oneOf([yup.ref("password")], "Password does not match").required("Please enter confirm password"),
})

const Register:React.FC = () => {
  const navigate=useNavigate()

    const initialValues = {
        username: "",
        email: "",
        password: "",
        cpassword: "",  
      };
    
    const {values,errors,handleSubmit,handleBlur,handleChange}=useFormik({
       initialValues,
       validationSchema:signupvalidation,
       onSubmit: async (values)=>{

          // const formdata=new FormData() 
          // formdata.append('username',values.username);
          // formdata.append('email',values.email);
          // formdata.append('password',values.password);
        //   formdata.append('profileImg',values.profileImg);
        // for (const pair of formdata.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        //   };

        try {
          const response = await axios.post(
            'http://localhost:8080/api/users/register',
            values,
            {
              withCredentials: true, // Include this in the config object
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
            if(response.status===200){
            toast.success('otp sended to your email')
            navigate('/Otpverify')
            }
           
          } catch (error) {
            console.log(error);
            toast.error(`something went wrong`)
            
          }
          
       }
    })

  return (
    <div className=' h-auto flex flex-col justify-center items-center bg-green-400 p-5'>
  
        <div>
            <img src={logo} alt=" logo.png" className=' h-20 w-25 '/>
        </div>
      <Toaster/>
    <div className='flex  items-center bg-white shadow-md rounded-md '>
        <div className="w-full max-w-xs">
  <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
    <div className="mb-4">
      <label className="block text-black-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
       id="username"
        type="text"
        name='username'
        placeholder="Username"
        value={values.username}
        onBlur={handleBlur}
        onChange={handleChange}    
         />
          {errors.username && <small className='text-red-600'>{errors.username}</small>}
    </div>
    <div className="mb-4">
      <label className="block text-black-700 text-sm font-bold mb-2" >
        email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="email"
       type="email" 
       name='email'
       placeholder="email"
       value={values.email}
       onBlur={handleBlur}
       onChange={handleChange}
       />
        {errors.email && <small className='text-red-600'>{errors.email}</small>}
    </div>
    <div className="mb-6">
      <label className="block text-black-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       id="password" 
       type="password"
       name='password'
       placeholder="**********"
       value={values.password}
       onBlur={handleBlur}
       onChange={handleChange}
       />
       {errors.password && <small className='text-red-600'>{errors.password}</small>}
    </div>

    <div className="mb-6">
      <label className="block text-black-700 text-sm font-bold mb-2" >
        Confirm Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-black-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       id="cpassword"
       type="password"
       name='cpassword' 
       placeholder="**********"
       value={values.cpassword}
       onBlur={handleBlur}
       onChange={handleChange}
       />
       {errors.cpassword && <small className='text-red-600'>{errors.cpassword}</small>}
    </div>

    <div className="flex flex-col items-center ">
      <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full mb-4"
       type="submit">
        Sign up
      </button>
      <p className='text-xs'>Already have an account?<a className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800" href="#">sign in </a></p> 
    </div>
  </form>
  {/* <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
</div>

<div>
    <p className='text-1xl p-3'>OR</p>
</div>
        <div className='m-3'>
           <Googlelogin/>
        </div>
   
    </div>

   
</div>
  )
}

export default Register