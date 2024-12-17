import React from 'react'
import { useAppSelector } from '../redux/hooks'
import axios from 'axios'

const Payment = () => {
    const vehicle=useAppSelector((state)=>state.vehicle.selectedVehicle)
    const days=useAppSelector((state)=>state.dateslice.daysdifference)
   const totalAmount=vehicle?.pricePerDay&& days&& vehicle.pricePerDay*days
   const startDate=useAppSelector((state)=>state.dateslice.pickupDate)
   const endDate=useAppSelector((state)=>state.dateslice.dropoffDate)

   const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment=async()=>{
    const user:any = localStorage.getItem("user")

    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const response=await axios.post(`http://localhost:8080/api/users/vehicle/payment/${user._id}`,{
       amount:totalAmount,
       vehicleName:vehicle?.name,
       startDate:startDate,
       endDate:endDate
    },{
        headers:{
          "Content-Type":"application/json",
        }
    })

    const {amount, id: order_id, currency}=response.data;

    const options = {
        key: "rzp_test_MHWmeOKrKTE7bB",
        amount: amount.toString(),
        currency: currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order_id,
        handler: async function (response) {
          // Step 2: Verify payment
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          
          console.log(paymentData);
   
          const verificationResult = await axios.post("http://localhost:8080/api/users/vehicle/verifyPayment", paymentData,{
           withCredentials:true,
          });
   
     
            // Step 3: Save order
       
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
   
      rzp1.open();

  };


  return (
    <div className=' flex flex-col  items-center justify-center'>
        <div className='border border-black rounded-xl w-1/2 flex flex-col items-center '>
        <div>
            <img src={vehicle?.image} alt="" className='w-72 h-48 object-contain'/>
        </div>
        <div>
            <p className='text-xl font-bold text-center'>{vehicle?.name}</p>
            <br />
            <p className='text-xl font-bold'>payableAmount: ₹{totalAmount}</p>
        </div>
        

        </div>

        <button className='bg-green-500 hover:bg-green-800 shadow-md rounded-xl p-2 mt-5 text-xl font-bold text-white' onClick={()=>handlePayment()}>Pay Now </button>
    </div>
  )
}

export default Payment