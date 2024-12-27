import  { useState } from 'react';
import Header from '../components/header/Header';
import { FaArrowRight } from "react-icons/fa";
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const DocumentCollect = () => {
  const [license, setLicense] = useState<File|null>(null);
  const navigate=useNavigate()

  // Optional: Show selected file name
  const handleSubmit = () => {
    const user=localStorage.getItem('user')
    if (license&&user) {
      toast.success(`File uploaded: ${license.name}`);
      navigate('/booking/payment')
    } else {
      if(!user){
        toast.error('please login ')
      }
      if(!license){
         toast.error("Please upload a file first.");
      }
    }
  };

  return (
    <div>
      <Header />
      <Toaster/>
      <div>
        <div className="flex flex-col md:flex-row  items-center justify-center w-full pt-20">
          <p className="bg-green-300 text-xl font-bold m-2 rounded-xl p-3">
            Upload your license here <FaArrowRight className="inline" />
          </p>
          <label 
            htmlFor="dropzone-file" 
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              onChange={(e) =>{
                if (e.target.files && e.target.files[0]) {
                  setLicense(e.target.files[0]); // Store the file object
                }
              }}  
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="pt-4 text-center">
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Book Now
        </button>
        {license && (
          <p className="mt-4 text-green-500">
            Selected File: {license.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentCollect;
