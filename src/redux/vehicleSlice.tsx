import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Booking {
    pickupDate: string; // ISO date string
    dropoffDate: string; // ISO date string
  }

  interface Reviews {
    userId:string,
    review:string,
    rating:number
  }

export interface vehicleSchema {
    id:string;
    name:string;
    type:string;
    brand:string;
    seatingCapacity:number ;
    pricePerDay:number;
    fuelType:"Petrol" | "Diesel" | "Electric";
    transmission:"Automatic" | "Manual";
    category:"Bike"|"EconomyCar"|"Luxury"
    image:string;
    bookings?:Booking[];   
    Reviews?:Reviews[];

}

interface vehicleState {
    EconomyCar:vehicleSchema[],
    LuxuryCar:vehicleSchema[],

}

const initialState:vehicleState={
    EconomyCar:[],
    LuxuryCar:[]
}
const vehicleSlice=createSlice({
    name:'vehicle',
    initialState,
    reducers:{
        addEconomyvehicle:(state,action:PayloadAction<vehicleSchema[]>)=>{
            state.EconomyCar=action.payload
        },
        addLuxuryVehicle:(state,action:PayloadAction<vehicleSchema[]>)=>{
            state.LuxuryCar=action.payload
        }
    }

})

export const {addEconomyvehicle,addLuxuryVehicle}=vehicleSlice.actions;
export default vehicleSlice.reducer;