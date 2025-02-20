import { useAppSelector } from '../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/header/Header';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import api from '../api';

// Declare Razorpay type
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Payment = () => {
  const vehicle = useAppSelector((state) => state.vehicle.selectedVehicle);
  const days = useAppSelector((state) => state.dateslice.daysdifference);
  const totalAmount = vehicle?.pricePerDay && days && vehicle.pricePerDay * days;
  const startDate = useAppSelector((state) => state.dateslice.pickupDate);
  const endDate = useAppSelector((state) => state.dateslice.dropoffDate);
  const navigate = useNavigate();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    Swal.fire({
      title: 'Proceed to Payment?',
      text: 'Are you sure you want to proceed with the payment? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed',
      cancelButtonText: 'No, Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Processing Payment',
          text: 'Please wait...',
          icon: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        try {
          const user = localStorage.getItem('user');
          if (!user) {
            Swal.fire('Error', 'User not found in local storage.', 'error');
            return;
          }
          const userparse = JSON.parse(user);

          const scriptLoaded = await loadRazorpayScript();

          if (!scriptLoaded) {
            Swal.fire('Error', 'Razorpay SDK failed to load. Are you online?', 'error');
            return;
          }

          const response = await api.post(
            `/vehicle/payment/${userparse._id}`,
            {
              amount: totalAmount,
              carId:vehicle?._id,
              vehicleName: vehicle?.name,
              startDate: startDate,
              endDate: endDate,
            },
            {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const { amount, id: order_id, currency } = response.data;

          const options = {
            key: 'rzp_test_MHWmeOKrKTE7bB',
            amount: amount.toString(),
            currency: currency,
            name: 'Acme Corp',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            order_id: order_id,
            handler: async function (response: {
              razorpay_order_id: string;
              razorpay_payment_id: string;
              razorpay_signature: string;
            }) {
              const paymentData = {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              };

              try {
                await api.post('/vehicle/verifyPayment', paymentData, {
                  withCredentials: true,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });

                toast.success('Payment completed successfully!');
                Swal.close();
                navigate('/');
              } catch (error) {
                console.error('Payment verification failed', error);
                Swal.fire('Error', 'Payment verification failed.', 'error');
              }
            },
            prefill: {
              name: 'Gaurav Kumar',
              email: 'gaurav.kumar@example.com',
              contact: '9000090000',
            },
            notes: {
              address: 'Razorpay Corporate Office',
            },
            theme: {
              color: '#3399cc',
            },
          };

          const rzp1 = new window.Razorpay(options);

          rzp1.on('payment.failed', function (response: any) {
            Swal.fire('Payment Failed', response.error.description, 'error');
          });

          rzp1.open();
        } catch (error) {
          console.error('Error in payment process', error);
          Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
        }
      }
    });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="border border-black rounded-xl w-1/2 flex flex-col items-center">
          <Toaster />
          <div>
            <img src={vehicle?.image} alt="" className="w-72 h-48 object-contain" />
          </div>
          <div>
            <p className="text-xl font-bold text-center">{vehicle?.name}</p>
            <br />
            <p className="text-xl font-bold">payableAmount: ₹{totalAmount}</p>
          </div>
        </div>

        <button
          className="bg-green-500 hover:bg-green-800 shadow-md rounded-xl p-2 mt-5 text-xl font-bold text-white"
          onClick={() => handlePayment()}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};

export default Payment;
