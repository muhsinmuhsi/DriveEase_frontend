import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from './vehicleSlice';

const Store=configureStore({
    reducer:{
        vehicle:vehicleSlice,
    },
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;