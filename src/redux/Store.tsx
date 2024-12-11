import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from './vehicleSlice';
import DateSlice from './DateSlice';

const Store=configureStore({
    reducer:{
        vehicle:vehicleSlice,
        dateslice:DateSlice,
    },
    
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;