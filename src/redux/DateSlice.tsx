import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Dateinterface {
  pickupDate:Date|null
  dropoffDate:Date|null
  daysdifference:number|null
  pickupLocation:string|null,
  dropoffLocation:string|null

}

const initialState:Dateinterface={
    pickupDate:null,
    dropoffDate:null,
    daysdifference:1,
    pickupLocation:'',
    dropoffLocation:'',

}

const DateSlice=createSlice({
    name:'dateSlice',
    initialState,
    reducers:{
        addpickupdate:(state,action:PayloadAction<string>)=>{
            state.pickupDate=new Date(action.payload) 
        },
        adddropoffDate:(state,action:PayloadAction<string>)=>{
            state.dropoffDate=new Date(action.payload)
        },
        setDaysDifference:(state,action:PayloadAction<number>)=>{
            state.daysdifference=action.payload
        },
        setpickupLocation:(state,action:PayloadAction<string>)=>{
            state.pickupLocation=action.payload
        },
        setdropoffLocation:(state,action:PayloadAction<string>)=>{
            state.dropoffLocation=action.payload
        }
    }
})

export const {addpickupdate,adddropoffDate,setDaysDifference,setdropoffLocation,setpickupLocation}=DateSlice.actions;
export default DateSlice.reducer;