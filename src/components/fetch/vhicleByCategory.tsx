// import React, { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../redux/hooks'
// import { additem, vehicleSchema } from '../../redux/vehicleSlice'
// import axios from 'axios'
// const vehicleByCategory = () => {

//     const dispatch=useAppDispatch();
//   const vehicle=useAppSelector((state)=>state.vehicle.EconomyCar)

//   useEffect(() => {
//     const fetchVehicles = async () => {
//       const economyCars = await CategoryVehicle("EconomyCar");
//       if (economyCars) {
//         dispatch(additem(economyCars)); // Dispatch only if data exists
//       }
//     };

//     fetchVehicles();
//   }, [dispatch]); // Add dependencies here

//   const CategoryVehicle = async (category: string): Promise<vehicleSchema[] | undefined> => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/users/vehicles/category/${category}`);
//       console.log(response.data.data, "this from collection");
//       return response.data.data;
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//       return undefined; // Handle error case
//     }
//   };
//   console.log(vehicle,'this is testing redux');
//   return (
//     <div>vhicleByCategory</div>
//   )
// }

// export default vehicleByCategory