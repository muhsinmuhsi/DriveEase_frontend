import { useFormik } from 'formik';
import  { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { number } from 'yup';
import { useAppDispatch } from '../../redux/hooks';
import adminApi from '../../adminApi';

const EditVehicle = ({isOpen,onclose,vehicleId}) => {
    const [image,setimage]=useState(null)
    const dispatch=useAppDispatch()


    const {values,handleBlur,handleChange,handleSubmit, setValues}=useFormik({
        initialValues:{
              name: '',
              type:'',
              brand:'',
              seatingCapacity: number,
              pricePerDay:number,
              fuelType:'',
              transmission:'',
              
        },
    
    
        onSubmit: async (values) => {
          
          const formData=new FormData();
          formData.append('name',values.name);
          formData.append('type',values.type);
          formData.append('brand',values.brand);
          formData.append('seatingCapacity',values.seatingCapacity)
          formData.append('pricePerDay',values.pricePerDay)
          formData.append('fuelType',values.fuelType)
          formData.append('transmission',values.transmission)
          if(image){
            formData.append('image',image)
          }
    
          console.log("Submitting values:", values);
          try {
              await adminApi.put(`/vehicle/update/${vehicleId}`,formData,{
                withCredentials:true,
                headers:{
                  "Content-Type": "multipart/form-data",
                },              
              });
              console.log("Product updated successfully");
              toast.success('product updated successfully')
              onclose()
          } catch (err) {
              console.log(err, "error to update product");
          }
      },
    });

    const imagehandle=(event)=>{
      setimage(event.target.files[0])
    }

    useEffect(() => {
        const getvehicle = async () => {
          
          try {
            const res = await adminApi.get(`/vehiclebyId/${vehicleId}`);
            setValues(res.data.data);         
          } catch (err) {
            console.log(err);
          }
        };
        getvehicle();
      },[vehicleId]);
        
  return (
    <>
{
    isOpen? (
    <>
    <Toaster/>
    <div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>
    <div className='w-8/12 h-auto bg-gray-200 rounded top-4 z-50 fixed mx-auto inset-x-0 p-5'>
    <form onSubmit={handleSubmit}>
    
    <label htmlFor="" className='font-bold'>
        Name
    </label>
        <input type="text"  className=' mb-5 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
        name='name'
        id='name'
        value={values.name}
        onChange={handleChange}
        />
<div className='flex justify-around py-6'>
    <label htmlFor="" className='font-bold'>
        type :-
    </label>
        <input 
        type="text" 
        id='type'
        value={values.type}
        onChange={handleChange}
        name='type'
         className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
    
        <label htmlFor="" className='font-bold'>
        brand :-
    </label>
        <input 
        type="text" 
        name='brand'
        value={values.brand}
        onChange={handleChange}
        id='brand'
         className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
 
</div>

<div className='flex justify-around py-6'>
    <label htmlFor="" className='font-bold'>
    seatingCapacity :-
    </label>
        <input
         type='number' 
         name='seatingCapacity'
        value={values.seatingCapacity}
        onChange={handleChange}
        id='seatingCapacity'
         className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
 
        <label htmlFor="" className='font-bold'>
        pricePerDay:-
    </label>
        <input 
        type="number" 
        name='pricePerDay'
        value={values.pricePerDay}
        onChange={handleChange}
        id='pricePerDay'

         className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
 
</div>

<div className='flex justify-around py-6'>
    <label htmlFor="" className='font-bold'>
    fuelType :-
    </label>
        <input 
        type="text"
        name='fuelType'
        value={values.fuelType}
        onChange={handleChange}
        id='fuelTYpe'
          className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
 
        <label htmlFor="" className='font-bold'>
        transmission:-
    </label>
        <input
         type="text"
         id='transmission'
         name='transmission'
         value={values.transmission}
         onChange={handleChange} 
         className=' bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500'/>
 
</div>

<div className='  py-6 '>
    <label htmlFor="" className='font-bold'>
    image :-
    </label>
        <input 
        type="file"
        name='brand'
        
        onChange={imagehandle}
        id='brand'
          className=' w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'/>
</div>
<div className='flex justify-between p-4'>
  <button type='submit' className='p-3 bg-green-600 hover:bg-green-800 rounded-lg shadow-md px-3'>submit</button>
    <button className='bg-green-600 rounded-lg shadow-md px-3 py-2 hover:bg-green-800  ' onClick={onclose}>close</button>
</div>
</form>
    </div>
    </>
    ):null}
    
    
    </>
    


    
  )
}

export default EditVehicle