import type { RootState,AppDispatch } from "./Store";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
