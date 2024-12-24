import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo-transparent-png.png'
import { IoLogOut } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";


const Sidebar: React.FC = () => {
  const navigate=useNavigate()

  const Logouthandle=()=>{
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
            localStorage.removeItem('admin_token')
            toast.success('admin logout success fully')
            navigate('/')
          }
        });
    
  }
  return (
    <div className="h-screen bg-green-600 text-white w-64 p-4 fixed">
      <img src={logo} alt=""  className="pb-8"/>
      <Toaster/>
      <ul>
        <li className="mb-3 ">
          <Link to="/admin/dashboard" className="hover:text-gray-300 text-xl font-semibold ">Dashboard</Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/cars" className="hover:text-gray-300 text-xl font-semibold">Manage Cars</Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/bookings" className="hover:text-gray-300 text-xl font-semibold">Manage Bookings</Link>
        </li>
        <li className="mb-3  ">
          <Link to="/admin/users" className="hover:text-gray-300 text-xl font-semibold">Manage Users</Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/addvehicle" className="hover:text-gray-300 text-xl font-semibold">Add Vehicle</Link>
        </li>
        <li>
          <Link to="/admin/reports" className="hover:text-gray-300 text-xl font-semibold">Reports</Link>
        </li>
      </ul>
      <div className=" pt-10">
        <button className="hover:text-gray-300 text-xl font-semibold" onClick={()=>Logouthandle()} > <IoLogOut  className="inline"/> logout</button>
      </div>
      
    </div>
  );
};

export default Sidebar;
