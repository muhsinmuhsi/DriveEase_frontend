import toast from 'react-hot-toast'
import logo from '../../assets/logo-transparent-png.png'
import * as yup from 'yup';
import { useFormik } from 'formik';
import Googlelogin from './Googlelogin';
import { useNavigate } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import api from '../../api';

const signupvalidation=yup.object({
        email: yup.string().email("Please enter valid email").required("Please enter email"),
        password: yup.string().min(5).required("Please enter password")
    })

const Login = () => {
  const navigate=useNavigate()


   const initialValues={
     email:"",
     password:"",
   }
    
const {errors,handleBlur,handleChange,handleSubmit}=useFormik({
   initialValues,
   validationSchema:signupvalidation,
   onSubmit:async(values)=>{


    try {
        const response=await api.post('/Login',values,{
          withCredentials:true,
            headers:{
              "Content-Type":"application/json",
            }
        })
        toast.success('User login success fully')
        navigate('/')        
        localStorage.setItem("user",JSON.stringify(response.data.data.user))
    } catch (error) {
        console.log(error);
        toast.error("something went wrong")
    }
   }
})
  return (
    
    <div>
      
      <div className=' h-auto flex flex-col justify-center items-center bg-green-400'>
  <div>
      <img src={logo} alt=" logo.png" className=' h-20 w-25 '/>
  </div>

<div className='flex flex-col md:flex-row items-center bg-white shadow-md rounded-md mb-36'>
  <div className="w-full max-w-xs">
<form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
<div className="mb-4">
<label className="block text-black-700 text-sm font-bold mb-2" >
  email
</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500" 
id="email"
 type="email" 
 name='email'
 placeholder="email"
//  value={values.email}
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
//  value={values.password}
 onBlur={handleBlur}
 onChange={handleChange}
 />
 {errors.password && <small className='text-red-600'>{errors.password}</small>}
</div>


<div className="flex flex-col items-center ">
<button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full mb-4"
 type="submit">
  Sign in
</button>
<p className='text-xs'>Already haven't an account?<a className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800" href="#">sign up </a></p> 
</div>
<button className='pt-10' onClick={()=>navigate('/adminLogin')}><RiAdminFill /></button>
</form>

</div>

<div>
<p className='text-1xl p-3'>OR</p>
</div>
  <div className='m-3'>
     <Googlelogin/>
  </div>

</div>


</div>

    </div>
  )
}

export default Login