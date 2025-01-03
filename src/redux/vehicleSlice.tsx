import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Booking {
    pickupDate: string; // ISO date string
    dropoffDate: string; // ISO date string
  }

  interface UserId{
    username:string
  }
  interface Reviews {
    userId:UserId,
    content:string,
  }

export interface vehicleSchema {
    _id:string;
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

export interface vehicleState {
    EconomyCar:vehicleSchema[],
    LuxuryCar:vehicleSchema[],
    selectedVehicle:vehicleSchema|null

}

export const initialState:vehicleState={
    EconomyCar:[],
    LuxuryCar:[],
    selectedVehicle:null

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
        },
        addSelectedVehicle:(state,action:PayloadAction<vehicleSchema>)=>{
            state.selectedVehicle=action.payload
        }
    }

})

export const {addEconomyvehicle,addLuxuryVehicle,addSelectedVehicle}=vehicleSlice.actions;
export default vehicleSlice.reducer;